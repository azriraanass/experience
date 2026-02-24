import { Module } from '@nestjs/common';
import { BlacklistService } from './blacklist.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlackList } from './entities/blacklist.entity';

@Module({
  imports:[TypeOrmModule.forFeature([BlackList])],
  providers: [BlacklistService]
})
export class BlacklistModule {}
