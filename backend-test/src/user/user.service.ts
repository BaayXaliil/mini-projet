import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './interfaces/user.interface';
import { UserName } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(UserName) private produitModel: Model<IUser>) { }

  async findAll(): Promise<IUser[]> {
    return await this.produitModel.find()
  }

  async findOne(id: string): Promise<IUser> {
    return await this.produitModel.findById(id)
  }

  async createUser(userCreated: CreateUserDto): Promise<IUser> {
    const newUser = new this.produitModel(userCreated);
    return await newUser.save()
  }

  async updateUser(id: string, userUpdate: CreateUserDto): Promise<IUser> {
    return await this.produitModel.findByIdAndUpdate(id, userUpdate)
  }

  async deleteUser(id: string): Promise<IUser> {
    return await this.produitModel.findByIdAndDelete(id)
  }
}
