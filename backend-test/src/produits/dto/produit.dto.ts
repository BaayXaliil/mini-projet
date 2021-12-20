import { IsNotEmpty, IsNumber } from "class-validator";

export class ProduitDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}