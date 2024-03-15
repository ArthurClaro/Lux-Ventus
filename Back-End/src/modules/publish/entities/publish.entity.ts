import { Exclude } from "class-transformer"
import { randomUUID } from "node:crypto"

export class Publish {
    readonly id: string
    title: string
    description: string
    image: string
    publiHot: boolean
    category: string
    host: string
    imgHost: string
    createdAt: Date

    constructor() {
        this.id = randomUUID()
    }

}
