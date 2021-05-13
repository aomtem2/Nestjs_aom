import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsNumber, IsDate } from 'class-validator';

export class LeaveDto {

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly name: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly staffId: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly position: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly department: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly location: string

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    readonly contact: number

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly type: string

    @IsNotEmpty()
    @IsDate()
    @ApiProperty()
    readonly startDate: Date

    @IsNotEmpty()
    @IsDate()
    @ApiProperty()
    readonly endDate: Date

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly reason: string
}