import { UserDto } from './../dto/user.dto';
import { AdministratorService } from './../service/administrator.service';
import { ValidationError } from "class-validator";
import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, Res, ValidationPipe,HttpStatus } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { Response,Request } from 'express';

@ApiTags('admin')
@Controller('administrator')
export class AdministratorController {
    constructor(private readonly administratorService: AdministratorService)
    {}

    @Post('create')
    @ApiOkResponse()
    create(@Body(new ValidationPipe({ exceptionFactory: (errors: ValidationError[]) => new BadRequestException(errors),})) userDto: UserDto){
        return this.administratorService.createUser(userDto)
    }

    // @Post('create/Supervisor')
    // @ApiOkResponse()
    // createSupervisor(@Body(new ValidationPipe({ exceptionFactory: (errors: ValidationError[]) => new BadRequestException(errors),})) userDto: UserDto){
    //     return this.administratorService.createUserSupervisor(userDto)
    // }

    // @Post('create/Staff')
    // @ApiOkResponse()
    // createStaff(@Body(new ValidationPipe({ exceptionFactory: (errors: ValidationError[]) => new BadRequestException(errors),})) userDto: UserDto){
    //     return this.administratorService.createUserStaff(userDto)
    // }
    
    @Get('getUser')
    @ApiOkResponse()
    read(){
        return this.administratorService.getAllUser()
    }

    @Put('update/:userId')
    @ApiOkResponse()
    update(
        @Param('userId') userId: string,
        @Body(new ValidationPipe({ exceptionFactory: (errors: ValidationError[]) => new BadRequestException(errors),})) userDto: UserDto, 
        @Res() res: Response){
        return this.administratorService.editUser(userId,userDto,res)
        // return res.status(HttpStatus.OK).json({ message: "update success" })
    }

    @Delete('delete/:userId')
    @ApiOkResponse()
    delete(
        @Param('userId') userId: string, @Res() res: Response){
            return this.administratorService.deleteUser(userId,res)
            // return res.status(HttpStatus.OK).json({ message: "Delete success" })
        }
    
}
