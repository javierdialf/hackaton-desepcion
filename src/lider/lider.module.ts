import { Module } from '@nestjs/common';
import { LiderService } from './lider.service';
import { LiderController } from './lider.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lider } from './entities/lider.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lider])],
  controllers: [LiderController],
  providers: [LiderService],
})
export class LiderModule {}
