import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {

  }

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
  ) {

    return this.userService.create(createUserDto);
  }
}
