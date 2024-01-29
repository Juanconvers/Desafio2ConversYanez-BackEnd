import crypto from 'crypto'

export class Product {
    constructor (title, description, code, stock){
        this.title = title,
        this.description = description,
        this.price = price,
        this.thumbnail = [],
        this.code = code,
        this.stock = stock,
        thid.id = crypto.randomBytes(10).toString('hex')
    }
}