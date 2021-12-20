import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProduitsController } from './produits.controller';
import { ProduitsService } from './produits.service';
import { ProduitName, ProduitSchema } from './schemas/produit.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: ProduitName, schema: ProduitSchema }])],
  controllers: [ProduitsController],
  providers: [ProduitsService]
})
export class ProduitsModule {}
