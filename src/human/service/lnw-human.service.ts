import { typeHuman } from "src/core/enum";
import { HumanDto } from "../dto/human.dto";
import { HumanService } from "./human.service";

export class LnwHumanService extends HumanService {
    constructor() {
        super()
    }

    createLnwHuman(humanDto: HumanDto) {
        return this.create(typeHuman.lnw, humanDto)
    }

    readLnwHuman() {
        return this.read(typeHuman.lnw)
    }

    updateLnwHuman(humanId: string, humanDto: HumanDto) {
        return this.update(+humanId, humanDto)
    }

    deleteLnwHuman(humanId: string) {
        return this.delete(+humanId)
    }
}