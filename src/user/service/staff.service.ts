import { UserService } from './user.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StaffService extends UserService {
    constructor(){
        super()
    }
}
