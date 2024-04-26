import { Exclude } from "class-transformer"
import { randomUUID } from "node:crypto"

export class Publish {
    readonly id: string
    title: string
    description: string
    image: string
    publiHot?: boolean | null
    category: string
    host: string
    imgHost: string

    // createdAt: Date
    createdAt: string

    constructor() {
        this.id = randomUUID();
        const currentDate = new Date();
        const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(currentDate);
        const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(currentDate);
        const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(currentDate);
        this.createdAt = `${month} ${day}th, ${year}`;
    }

}
