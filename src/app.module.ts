import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './auth/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://samuelmazzocato:bXV9GzNq5HcD3f5n@testcluster.xngez.mongodb.net/?retryWrites=true&w=majority&appName=testCluster'),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}