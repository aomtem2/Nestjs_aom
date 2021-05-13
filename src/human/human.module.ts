import { Module } from '@nestjs/common';
import { HumanService } from './service/human.service';
import { LnwHumanService } from './service/lnw-human.service';
import { LnwHumanController } from './controller/lnw-human.controller'
import { tbHuman } from './entities/tbHuman.entity';
import { tbHumanWeapon } from './entities/tbHumanWeapon.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KakHumanService } from './service/kak-human.service';
import { KakHumanController } from './controller/kak-human.controller'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      tbHuman,
      tbHumanWeapon
    ])
  ],
  controllers: [
    LnwHumanController,
    KakHumanController
  ],
  providers: [
    HumanService,
    LnwHumanService,
    KakHumanService
  ]
})
export class HumanModule { }

