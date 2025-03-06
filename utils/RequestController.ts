import {Product} from '~/utils/Products'
import { v4 as uuidv4 } from 'uuid';
import { useCartStore } from '~/stores/cart'
import {LineItemInterface, RequestInterface} from '~/utils/Interfaces'

export class LineItem implements LineItemInterface {
    id;
    name;
    netPrice;
    scheduled;
    constructor(id: number, name: string, netPrice: number, scheduled: {days: number, startDate: number, endDate: number}) {
        this.id = id;
        this.name = name;
        this.netPrice = netPrice;
        this.scheduled = scheduled
    }
}

export class Request implements RequestInterface {
    requestId;
    cartItems;
    personalDetails;
    constructor(requestId: string, cartItems: Array<LineItemInterface>[], personalDetails: Object) {
        this.requestId = requestId;
        this.cartItems = cartItems;
        this.personalDetails = personalDetails
    }
    async create(host) {
        try {
            const response: Response = await fetch(host, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    cartItems: this.cartItems,
                    personalDetails: this.personalDetails,
                    id: this.requestId
                })
            });

            // Response handling.
            const result = await response;
            console.log(result)

            // Reset the form values.
            return result.status === 200;
        } catch(error) {
            console.error(error)
            return false
        }
    }
}

export class RequestController {
    host: String
    constructor() {
        this.host = 'https://hook.eu2.make.com/sgs2zfgvj5jkrqjwbzbmt8tq8a3t6o8k'
    }
    private formatCart(): Array<LineItemInterface>[] {
        const store = useCartStore()
        const getCart = computed(() => store.getProducts).value
        let formattedCart = []
        getCart.forEach((e) => {
            const lineItem = new LineItem(e.id, e.name, e.netPrice, {
                days: e.requestRange.daysCount ?? null,
                startDate: Date.parse(e.requestRange.fromStamp),
                endDate: Date.parse(e.requestRange.toStamp),
            })
            formattedCart.push(lineItem)
        })
        return formattedCart
    }
    async sendRequest(personalDetails): Promise<void> {
        const request = new Request(uuidv4(), this.formatCart(), personalDetails)
        if (await request.create(this.host)) {
            const store = useCartStore()
            store.removeCart()
            return true
        }
        /*
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
        }*/
    }
}