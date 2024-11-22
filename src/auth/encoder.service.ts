import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class EncoderService {

    async encodePassword(password: string):Promise<string> {
        const salt = await bcrypt.genSalt();
        return await bcrypt.hash(password, salt);
    }

    async checkPassword(PlanePassword: string, hashepassword: string): Promise<boolean> {
        return await bcrypt.compare(PlanePassword, hashepassword);
    }
}