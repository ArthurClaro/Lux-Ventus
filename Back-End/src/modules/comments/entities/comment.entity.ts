import { randomUUID } from "node:crypto"

export class Comment {
    readonly id: string
    name: string
    description: string
    likes: number
    createdAt: Date

    detailPublishId?: string | null


    constructor() {
        this.id = randomUUID()
    }

}
