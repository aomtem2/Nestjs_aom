import { UserService } from './user.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupervisorService extends UserService {
    constructor() {
        super()
        
    }
    
}
