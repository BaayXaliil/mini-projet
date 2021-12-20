import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserName, UserSchema } from './schemas/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: UserName, schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
