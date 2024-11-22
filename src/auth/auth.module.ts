import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { EncoderService } from 'src/auth/encoder.service';
import { UsersModule } from 'src/users/users.module';
import { AuthTokensService } from './auth.tokens.service';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.register({}),
    UsersModule],
  controllers: [AuthController],
  providers: [AuthTokensService, AuthService, EncoderService, LocalStrategy, JwtStrategy, ConfigService]
})
export class AuthModule {}
