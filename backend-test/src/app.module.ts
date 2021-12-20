import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProduitsModule } from './produits/produits.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('http://localhost/backend-test'),
    ProduitsModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
