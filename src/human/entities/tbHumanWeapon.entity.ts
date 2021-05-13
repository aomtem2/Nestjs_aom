import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class tbHumanWeapon {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    left: string
    
    @Column()
    right: string

    @Column()
    humanId: number
}