import { users } from './entities/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { AdministratorService } from './service/administrator.service';
import { HrAdministratorService } from './service/hr-administrator.service';
import { SupervisorService } from './service/supervisor.service';
import { StaffService } from './service/staff.service';
import { AdministratorController } from './controller/administrator.controller';
import { HrAdministratorController } from './controller/hr-administrator.controller';
import { SupervisorController } from './controller/supervisor.controller';
import { StaffController } from './controller/staff.controller';

@Module({
  imports:[TypeOrmModule.forFeature([users])],
  controllers: [ AdministratorController, HrAdministratorController, SupervisorController, StaffController],
  providers: [UserService, AdministratorService, HrAdministratorService, SupervisorService, StaffService,],
  exports: [TypeOrmModule]
})
export class UserModule {}
