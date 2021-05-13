import { UserService } from './user.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HrAdministratorService extends UserService {
    constructor(){
        super()
    }
}
