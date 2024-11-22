import { ForbiddenException, Injectable} from "@nestjs/common";
import { AuthTokensService } from "./auth.tokens.service";
import { User } from "src/users/entities/users.entity";
import { UsersService } from "src/users/users.service";
import { createUserDto } from "src/auth/dto/create-user.dto";
import { ConflictException } from "@nestjs/common";
import { EncoderService } from "./encoder.service";
import { credentialUserDto } from "./dto/credential-user.dto";
import { jwtPayloadDto } from "./dto/JwtPayloadDto.dto";
import { resLoginType } from "./types/res-loginType";

@Injectable()
export class AuthService {
    constructor(private readonly authTokensService: AuthTokensService, private usersService: UsersService,
        private encoderService: EncoderService) {}


    async singIn(credentials: credentialUserDto): Promise<resLoginType> {
           const user = await this.validateUser(credentials);
           if (!user) throw new ForbiddenException('please check your credentials');

           const payload: jwtPayloadDto = {
                id: user.id,  
                sub: user.email,
            }

            const tokens = this.authTokensService.getTokens(payload);
            return {
                message: 'successful login',
                access_token: (await tokens).access_token,
                refresh_token: (await tokens).refresh_token,
                user: user
            };
    }


    async register({email, password,  ...data}: createUserDto): Promise<User | null> {
        const exist = await this.usersService.findUserByEmail(email);
        if(exist) throw new ConflictException('the email already has an account');

        const hashedPassword = await this.encoderService.encodePassword(password);
        return await this.usersService.createUser({password: hashedPassword, email: email, ...data});
    }


    async validateUser({email, password}: credentialUserDto): Promise<User | null> {
        const user: User = await this.usersService.findUserByEmail(email);

       if (await user)
        if(await this.encoderService.checkPassword(password,user.password)) {
            delete user.password;
            return user;
       }
            return null;
    }
}