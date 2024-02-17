import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UserActiveInterface } from 'src/common/interface/user-active.interface';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<{
        name: string;
        email: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        token: string;
        email: string;
    }>;
    profile(user: UserActiveInterface): Promise<import("../users/entities/user.entity").User>;
}
