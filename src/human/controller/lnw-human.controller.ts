import { BadRequestException, Body, Controller, Delete, Get, Param, Post, ValidationPipe } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { ValidationError } from "class-validator";
import { HumanDto } from "../dto/human.dto";
import { LnwHumanService } from "../service/lnw-human.service";

@ApiTags('lnw-human')
@Controller('lnw-human')
export class LnwHumanController {
   constructor(
      private readonly lnwHumanService: LnwHumanService,
   ) { }

   @Post('create')
   @ApiOkResponse()
   create(
      @Body(new ValidationPipe({
         exceptionFactory: (errors: ValidationError[]) => new BadRequestException(errors),
      })) humanDto: HumanDto
   ) {
      return this.lnwHumanService.createLnwHuman(humanDto);
   }

   @Get('read')
   @ApiOkResponse()
   read() {
      return this.lnwHumanService.readLnwHuman();
   }

   @Post('update/:humanId')
   @ApiOkResponse()
   update(
      @Param('humanId') humanId: string,
      @Body(new ValidationPipe({
         exceptionFactory: (errors: ValidationError[]) => new BadRequestException(errors),
      })) humanDto: HumanDto
   ) {
      return this.lnwHumanService.updateLnwHuman(humanId, humanDto);
   }

   @Delete('delete/:humanId')
   @ApiOkResponse()
   delete(
      @Param('humanId') humanId: string
   ) {
      return this.lnwHumanService.deleteLnwHuman(humanId);
   }
}