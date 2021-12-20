import { BadRequestException, Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Patch, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ProduitDTO } from './dto/produit.dto';
import { IProduit } from './interfaces/produit.interface';
import { ProduitsService } from './produits.service';

@Controller()
export class ProduitsController {
  constructor(private produitService: ProduitsService) { }
  
  @Post('produit')
  async createProduct(@Body() createProduct: ProduitDTO): Promise<IProduit> {
    return this.produitService.createProduct(createProduct);
  }

  @Post('produit/upload-photo')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: "./uploads",
      filename: (req, file, cb) => {
        const name = file.originalname.split(".")[0];
        const fileExtension = file.originalname.split(".")[1];
        const newFileName = name.split(" ").join("_") + "_" + Date.now() + "." + fileExtension;

        cb(null, newFileName);
      }
    }),
    fileFilter: (req, file, cb) => {
      if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(null, false)
      }
      return cb(null, true)
    }
  }))
  async uploadPhoto(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException("Erreur d'enregistrement de l'image")
    }
    const response = {
      filepath: `http://localhost:5000/produit/images/${file.filename}`
    }
    return response;
  }

  @Get('produit/images/:filename')
  async getPicture(@Param('filename') filename, @Res() res) {
    res.sendFile(filename, {root: './uploads'})
  }

  @Get('produits')
  async getProducts() {
    return this.produitService.findAll();
  }

  @Get('produit/:id')
  async getOneProduct(@Res() res, @Param('id') productID) {
    const product = await this.produitService.findOne(productID);
    if (!product) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      product
    });
  }
  @Patch('produit/:id')
  async updateProduct(@Res() res, @Param('id') productID, @Body() productUpdated: ProduitDTO) {
    const product = await this.produitService.updateProduct(productID, productUpdated);
    if (!product) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Product updated Successfully',
      product
    });
  }

  @Delete('produit/:id')
  async deleteProduct(@Res() res, @Param('id') productID) {
    const productDeleted = await this.produitService.deleteProduct(productID);
    if (!productDeleted) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Product Deleted Successfully',
      productDeleted
    });
  }
}
