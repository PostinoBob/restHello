import { Controller, Get, Post, Body, Res, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Post('login')
  async login(@Body() body, @Res() res: Response) {
    try {
      const user = await this.appService.login(body.username, body.password);
      if (user) {
        res.redirect(`/welcome?username=${user.username}`);
      } else {
        res.status(401).send('Invalid credentials');
      }
      
    } catch (error) {
      res.status(500).send('Qualcosa è andato storto, riprova.');
    }
  }

  @Get('welcome')
  getProtected(@Request() req): string {
    return `<h1 style="text-align:center;">Hello user ${req.query.username}</h1>`;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
