import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './auth/user.module';
import * as dotenv from 'dotenv';
require('dotenv').config();

@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.MONGO_ATLAS_URL}`),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule 
{

}
