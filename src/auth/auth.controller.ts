import { Body, Controller, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { createUserDto } from 'src/auth/dto/create-user.dto';
import { User } from 'src/users/entities/users.entity';
import { AuthService } from './auth.service';
import {IsPublic} from './decorators/public.decorator';
import { Request } from 'express';
import { LocalGuard } from './guards/local.guard';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalGuard)
    @IsPublic()
    @Post('/login')
    login(@Req() req: Request) {
        return req.user;
    }

    
    @IsPublic()
    @Post('/register')
    async register(@Body() data: createUserDto): Promise<User | null > {
      return await this.authService.register(data);
    }

    @Post('/refreshToken')
    refreshToken(){

    }
}
