import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class HumanDto {

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly name: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly left: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly right: string
}