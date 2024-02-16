import {  BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';

import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService:UsersService,
        private  readonly jwtService: JwtService,
    ){}

   async register({name,email,password}:RegisterDto) {
      const user =  await this.userService.findOneByEmail(email);

      if (user) {
        throw new BadRequestException('User already exist');
      }
      return await this.userService.create({name,email,password: await bcryptjs.hash(password,10)});

    }

    async login({email,password} :LoginDto) {
        const user =  await this.userService.findOneByEmail(email);

        if (!user) {
            throw new UnauthorizedException('Email is wrong');
        }

        const isPasswprdValid = await bcryptjs.compare(password, user.password);
        if (!isPasswprdValid) {
            throw new UnauthorizedException('Password is wrong');
        }

        const payload = {email: user.email, role: user.role};

        const token = await this.jwtService.signAsync(payload);

        return {token,email};
    }

    async profile({email,role}:{email:string, role:string}){
        if (role !== 'admin') {
            throw new UnauthorizedException('No authorized ');
        }
        return  await this.userService.findOneByEmail(email);
    }
    
}
