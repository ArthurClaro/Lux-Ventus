import { randomUUID } from "node:crypto"

export class Comment {
    readonly id: string
    name: string
    description: string
    likes: number
    createdAt: string

    // detailPublishId?: string | null
    publishId?: string | null


    constructor() {
        this.id = randomUUID()
        const currentDate = new Date();
        const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(currentDate);
        const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(currentDate);
        const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(currentDate);
        this.createdAt = `${month} ${day}th, ${year}`;
    }

}
