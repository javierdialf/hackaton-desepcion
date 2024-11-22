import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy} from "passport-local";
import { AuthService } from "../auth.service";
import { resLoginType } from "../types/res-loginType";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
     constructor(private authService: AuthService){
        super({
            usernameField: 'email',
        });
     }

  validate(email: string, password: string): Promise<resLoginType> {
      const user = this.authService.singIn({email, password});
            return user;
     } 
     
}
