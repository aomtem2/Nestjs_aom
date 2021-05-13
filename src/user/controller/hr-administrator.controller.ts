import { HrAdministratorService } from './../service/hr-administrator.service';
import { UserDto } from './../dto/user.dto';
import { AdministratorService } from './../service/administrator.service';
import { ValidationError } from "class-validator";
import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, Res, ValidationPipe,HttpStatus } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { Response,Request } from 'express';

@ApiTags('hr')
@Controller('hr-administrator')
export class HrAdministratorController {

    constructor(private readonly hrAdministratorService:HrAdministratorService)
    {}

    @Post('create')
    @ApiOkResponse()
    create(@Body(new ValidationPipe({ exceptionFactory: (errors: ValidationError[]) => new BadRequestException(errors),})) userDto: UserDto){
        return 
    }
    
    @Get('getLeave')
    @ApiOkResponse()
    read(){
        return 
    }

    @Delete('delete/:userId')
    @ApiOkResponse()
    delete(
        @Param('userId') userId: string, @Res() res: Response){
            return 
            // return res.status(HttpStatus.OK).json({ message: "Delete success" })
        }
}
