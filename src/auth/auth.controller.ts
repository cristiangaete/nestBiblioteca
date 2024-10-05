import { Body, Controller, Get, Param, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';
import { Roles } from './decorators/roles.decorator';
import { RolesGuard } from './guard/roles.guard';
import { Role } from '../common/enums/rol.enum';
import { Auth } from './decorators/auth.decorator';
import { ActiveUser } from 'src/common/decorator/active-user.decorator';
import { UserActiveInterface } from 'src/common/interface/user-active.interface';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UpdateProfileDto } from './dto/update-profile.dto';

interface RequestWithUser extends Request{
    user:{
        email:string;
        role:string;
    }
}

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
    ){}

    @Post('register')
    register(@Body()registerDto: RegisterDto){
        
        return this.authService.register(registerDto);
    }

    @Post('login')
    login (@Body() loginDto: LoginDto){
        return this.authService.login(loginDto);
    }

    // @Get('profile')
    // @Roles(Role.ADMIN)
    // @UseGuards(AuthGuard, RolesGuard)
    // profile(@Request() req: RequestWithUser){
    //     // return req.user;
    //     return this.authService.profile(req.user);
    // }

    @ApiBearerAuth()
    @Get('profile')
    @Auth(Role.USER)
    profile(@ActiveUser() user: UserActiveInterface){
        // return req.user;
        return this.authService.profile(user);
    }

    @ApiBearerAuth()
    @Patch('profile/:id')
    @Auth(Role.USER)
    updateProfile(@Param('id') id: string,@Body() updateProfileDto: UpdateProfileDto, @ActiveUser() user: UserActiveInterface){
        // return req.user;
        return this.authService.updateProfile(+id, updateProfileDto, user);
    }
}
