import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { HumanModule } from './human/human.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/service/user.service';
import { AdministratorController } from './user/Controller/administrator.controller';
import * as ormconfig from './ormconfig'

@Module({
  imports: [
    // ConfigModule.forRoot({ "envFilePath": '._develop.env' }),
    // TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: `localhost`,
      port: 3306,
      username: `root`,
      password: ``,
      database: `intern_db`,
      autoLoadEntities: true,
      synchronize: true,
    }),
    HumanModule,
    UserModule,
  ],
})

export class AppModule { }