import { UserDtoUpdate } from './../dto/userUpdate.dto';
import { UserDto } from './../dto/user.dto';
import { UserService } from './user.service';
import { Injectable } from '@nestjs/common';
import { typeUser } from 'src/core/enumuser';
import { Response} from 'express';

@Injectable()
export class AdministratorService extends UserService {
    constructor(){
        super()
    }

    createUser(userDto:UserDto){
        return this.create(userDto)
    }

    getAllUser (){
        return this.findAll()
    }

    editUser(userId:string,userDto:UserDto,res: Response){
        return this.update(+userId,userDto,res)
    }

    deleteUser(userId:string,res: Response){
        return this.remove(+userId,res)
    }

}
