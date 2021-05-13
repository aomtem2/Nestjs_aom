import { UserDtoUpdate } from './../dto/userUpdate.dto';
import * as bcrypt from 'bcrypt';
import { getConnection } from 'typeorm';
import { users } from './../entities/users.entity';
import { UserDto } from './../dto/user.dto';
import { Injectable,HttpStatus } from '@nestjs/common';
import { Response} from 'express';

@Injectable()
export class UserService {
    constructor(){}
    async create(userDto:UserDto) {
        let user = new users()
        user.name = userDto.name;
        user.type = userDto.type
        user.email = userDto.email
        user.password = await bcrypt.hash(userDto.password,12);
        const res = await getConnection().getRepository(users).save(user)  
        return res
    }

    async findAll() {
        // await this.userRepository.update(id,user);
        const result = await getConnection().getRepository(users).find().then(response => {
                console.log(response)
                return response
            })
        return result
    }

    async update(userId:number,userDto:UserDto,res: Response){
        await getConnection().getRepository(users).findOneOrFail({where:{id:userId}}).then(async (response) => {
            console.log(response)
            let user = new users()
            user.name = userDto.name;
            user.type = userDto.type
            user.email = userDto.email
            user.password = await bcrypt.hash(userDto.password,12);
            const result = await getConnection().getRepository(users).update(userId,user)
            return result
            // return response         
        }).then(response => {
            console.log(response)
            return res.status(HttpStatus.OK).json({ message: "Update success" })
        }).catch(error =>{
            console.log(error)
            return res.status(HttpStatus.OK).json({ message: "Update fail" })
        })
        
    }

    async remove(userId:number,res: Response){
        await getConnection().getRepository(users).findOneOrFail({where:{id:userId}}).then(async (response) => {
            console.log(response)
            const result = await getConnection().getRepository(users).delete(userId)
            return result
            // return response         
        }).then(response => {
            console.log(response)
            return res.status(HttpStatus.OK).json({ message: "Delete success" })
        }).catch(error =>{
            console.log(error)
            return res.status(HttpStatus.OK).json({ message: "Delete fail" })
        })
    }
    

}
