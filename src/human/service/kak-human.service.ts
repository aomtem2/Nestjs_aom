import { typeHuman } from "src/core/enum";
import { HumanDto } from "../dto/human.dto";
import { HumanService } from "./human.service";

export class KakHumanService extends HumanService {
    constructor() {
        super()
    }

    createKakHuman(humanDto: HumanDto) {
        return this.create(typeHuman.kak, humanDto)
    }

    readKakHuman() {
        return this.read(typeHuman.kak)
    }

    updateKakHuman(humanId: string, humanDto: HumanDto) {
        return this.update(+humanId, humanDto)
    }

    deleteKakHuman(humanId: string) {
        return this.delete(+humanId)
    }
}