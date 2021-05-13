import { LeaveDto } from './../dto/leave.dto';
import { StaffService } from './../service/staff.service';
import { AdministratorService } from './../service/administrator.service';
import { ValidationError } from "class-validator";
import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, Res, ValidationPipe,HttpStatus } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { Response,Request } from 'express';

@ApiTags('staff')
@Controller('staff')
export class StaffController {

    constructor(private readonly staffService:StaffService)
    {}

    @Post('createLeave')
    @ApiOkResponse()
    createLeave(@Body(new ValidationPipe({ exceptionFactory: (errors: ValidationError[]) => new BadRequestException(errors),})) leaveDto:LeaveDto){
        return 
    }

    @Delete('delete/:leaveId')
    @ApiOkResponse()
    deleteLeave(
        @Param('userId') leaveId: string, @Res() res: Response){
            return 
            // return res.status(HttpStatus.OK).json({ message: "Delete success" })
        }
}
