import { randomUUID } from "node:crypto"


export class ImagesDetail {

    readonly id: string
    images: string

    detailPublishId?: string | null

    constructor() {
        this.id = randomUUID()
    }

}
