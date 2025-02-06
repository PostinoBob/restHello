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
/*
@UseGuards(AuthGuard('local'))
@Get('protected')
getProtected(@Request() req): string {
  return `Hello ${req.user.username}`;
}
*/
  @Get('welcome')
  getProtected(@Request() req): string {
    return `<h1 style="text-align:center;">Hello user ${req.query.username}</h1>`;
}

  @Get()
  getHello(): string {
    return `
    <div style="text-align: center; border: 2px solid black; padding: 10px; margin: 30%;">
      <h1>Login</h1>
      <form action="/login" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"><br><br>
        <input type="submit" value="Login">
      </form>
    </div>`;
  }
    //return this.appService.getHello();
}