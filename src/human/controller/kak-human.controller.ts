import { BadRequestException, Body, Controller, Delete, Get, Param, Post, ValidationPipe } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { ValidationError } from "class-validator";
import { HumanDto } from "../dto/human.dto";
import { KakHumanService } from "../service/kak-human.service";

@ApiTags('kak-human')
@Controller('kak-human')
export class KakHumanController {
    constructor(
        private readonly kakHumanService: KakHumanService,
    ) { }

    @Post('create')
    @ApiOkResponse()
    create(
        @Body(new ValidationPipe({ exceptionFactory: (errors: ValidationError[]) => new BadRequestException(errors),})) humanDto: HumanDto
    ) {
        return this.kakHumanService.createKakHuman(humanDto);
    }

    @Get('read')
    @ApiOkResponse()
    read() {
        return this.kakHumanService.readKakHuman();
    }

    @Post('update/:humanId')
    @ApiOkResponse()
    update(
        @Param('humanId') humanId: string,
        @Body(new ValidationPipe({
            exceptionFactory: (errors: ValidationError[]) => new BadRequestException(errors),
        })) humanDto: HumanDto
    ) {
        return this.kakHumanService.updateKakHuman(humanId, humanDto);
    }

    @Delete('delete/:humanId')
    @ApiOkResponse()
    delete(
        @Param('humanId') humanId: string
    ) {
        return this.kakHumanService.deleteKakHuman(humanId);
    }

}