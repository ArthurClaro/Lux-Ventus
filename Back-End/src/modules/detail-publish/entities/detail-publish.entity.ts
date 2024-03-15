import { randomUUID } from "node:crypto"

export class DetailPublish {
    readonly id: string
  
    title: string
    description: string



    publishId?: string | null

    constructor() {
        this.id = randomUUID()
    }

}
