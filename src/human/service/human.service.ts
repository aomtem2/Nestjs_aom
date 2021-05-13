import { getConnection } from "typeorm"
import { HumanDto } from "../dto/human.dto"
import { tbHuman } from "../entities/tbHuman.entity"
import { tbHumanWeapon } from "../entities/tbHumanWeapon.entity"

export class HumanService {
    constructor() { }

    async create(type: string, humanDto: HumanDto) {
        let human = new tbHuman()
        human.name = humanDto.name
        human.type = type
        human = await getConnection().getRepository(tbHuman).save(human)
        let humanWeapon = new tbHumanWeapon()
        humanWeapon.humanId = human.id
        humanWeapon.left = humanDto.left
        humanWeapon.right = humanDto.right
        humanWeapon = await getConnection().getRepository(tbHumanWeapon).save(humanWeapon)
        return human
    }

    async read(type: string) {
        const result = await getConnection().getRepository(tbHuman).find({ where: { type: type } })
        console.log('result', result)
        return result
    }

    async update(humanId: number, humanDto: HumanDto) {
        let human = await getConnection().getRepository(tbHuman).findOneOrFail({ where: { id: humanId } })
        human.name = humanDto.name
        human = await getConnection().getRepository(tbHuman).save(human)
        console.log('human', human)
        // let humanWeapon = await getConnection().getRepository(tbHumanWeapon).findOneOrFail({ where: { humanId: humanId } })
        // humanWeapon.left = humanDto.left
        // humanWeapon.right = humanDto.right
        // humanWeapon = await getConnection().getRepository(tbHumanWeapon).save(humanWeapon)
        // console.log('humanWeapon', humanWeapon)
        return human
    }

    async delete(humanId: number) {
        let human = await getConnection().getRepository(tbHuman).findOneOrFail({ where: { id: humanId } })
        human = await getConnection().getRepository(tbHuman).remove(human)
        console.log('human', human)
        // let humanWeapon = await getConnection().getRepository(tbHumanWeapon).find({ where: { humanId: humanId } })
        // humanWeapon = await getConnection().getRepository(tbHumanWeapon).remove(humanWeapon)
        // console.log('humanWeapon', humanWeapon)
        return human
    }
}