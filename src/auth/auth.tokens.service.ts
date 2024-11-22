import { Injectable} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { EncoderService } from 'src/auth/encoder.service';
import { jwtPayloadDto } from './dto/JwtPayloadDto.dto';

@Injectable()
export class AuthTokensService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private enconderService: EncoderService) {}

        
    async getTokens(payload: jwtPayloadDto): Promise<{access_token: string, refresh_token: string}> {

        const [ac_token, rf_token] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: 'laprimera',//changue secret access_token_key (enviroment variables-dev)
                expiresIn: '2h'
            }),

            this.jwtService.signAsync(payload, {
                secret: 'lasegunda',//changue secret refreshtoken_token_key (enviroment variables-dev)
                expiresIn: '7d'
            }),
        ]);

        return {
            access_token: ac_token,
            refresh_token: rf_token
        }


        } catch(error) {
            return error;
        }
    }    

    /*
    
    genJwtRefreshToken(payload: jwtPayloadDto) {
        try{
            const refresh_token = this.jwtService.signAsync(payload,{
                secret: 'laprimerasedesespera',
                expiresIn: '3m'
            });

            return refresh_token;
        } catch(error) {
            return error;
        }
    }
    */
