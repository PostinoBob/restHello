import { Injectable } from '@nestjs/common';
import { AuthService } from './auth/auth.service';

@Injectable()
export class AppService {
  constructor(private authService: AuthService) {}

  async login(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    return user;
  }
  
  getHello(): string {
    return `
      <div style="text-align: center; border: 2px solid black; padding: 10px; margin: 10%;">
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
}
