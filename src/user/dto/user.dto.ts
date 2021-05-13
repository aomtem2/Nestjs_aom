import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class UserDto {

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly name: string

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    readonly email: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly password: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly type: string
}