import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Patch, Post, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) { }

  @Post('user')
  async createProduct(@Body() createProduct: CreateUserDto): Promise<IUser> {
    return this.userService.createUser(createProduct);
  }

  @Get('users')
  async getUsers() {
    return this.userService.findAll();
  }

  @Get('user/:id')
  async getOneUser(@Res() res, @Param('id') userID) {
    const user = await this.userService.findOne(userID);
    if (!user) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json({
      user
    });
  }
  @Patch('user/:id')
  async updateUser(@Res() res, @Param('id') userID, @Body() userUpdated: CreateUserDto) {
    const user = await this.userService.updateUser(userID, userUpdated);
    if (!user) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'User updated Successfully',
      user
    });
  }

  @Delete('user/:id')
  async deleteUser(@Res() res, @Param('id') userID) {
    const userDeleted = await this.userService.deleteUser(userID);
    if (!userDeleted) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'User Deleted Successfully',
      userDeleted
    });
  }
}
