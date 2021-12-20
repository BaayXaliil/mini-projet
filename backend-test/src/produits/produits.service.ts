import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProduitDTO } from './dto/produit.dto';
import { IProduit } from './interfaces/produit.interface';
import { ProduitName } from './schemas/produit.schema';

@Injectable()
export class ProduitsService {
  constructor(@InjectModel(ProduitName) private produitModel: Model<IProduit>) { }

  async findAll(): Promise<IProduit[]> {
    return await this.produitModel.find()
  }

  async findOne(id: string): Promise<IProduit> {
    return await this.produitModel.findById(id)
  }

  async createProduct(createProductDTO: ProduitDTO): Promise<IProduit> {
    const newProduct = new this.produitModel(createProductDTO);
    return await newProduct.save()
  }

  async updateProduct(id: string, updateProduct: ProduitDTO): Promise<IProduit> {
    return await this.produitModel.findByIdAndUpdate(id, updateProduct)
  }

  async deleteProduct(id: string): Promise<IProduit> {
    return await this.produitModel.findByIdAndDelete(id)
  }
}
