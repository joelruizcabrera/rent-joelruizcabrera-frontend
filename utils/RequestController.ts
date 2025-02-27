import {Product} from '~/utils/Products'
import { v4 as uuidv4 } from 'uuid';



export class RequestController {
    product: Product
    host: String
    constructor(id: number) {
        this.product = new Product(id)
        this.host = 'https://hook.eu2.make.com/sgs2zfgvj5jkrqjwbzbmt8tq8a3t6o8k'
    }
    async sendRequest(): Promise<void> {
        let requestObject = {
            requestId: uuidv4(),
            product: {
                id: this.product.getId,
                name: this.product.getName(),
            }
        }
        console.log(this.host)
        try {
            const response: Response = await fetch(this.host, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestObject)
            });

            // Response handling.
            const result = await response;
            console.log(result)

            // Reset the form values.
            if (result.statusCode === 200) {
                console.log(res)
            }
        } catch(error) {
            console.error(error)
        }
    }
}