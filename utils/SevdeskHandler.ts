import {LineItemInterface} from "~/utils/Interfaces";

export class SevdeskHandler {
    headers;
    host;

    lineItems;
    personalDetails;
    requestId;

    constructor(requestId: string, lineItems: Array<LineItemInterface>[], personalDetails: Object) {
        this.requestId = requestId;
        this.lineItems = lineItems;
        this.personalDetails = personalDetails
        this.host = "https://my.sevdesk.de/api/v1"
    }

    setHeader(): HeadersInit {
        const headers: HeadersInit = new Headers();
        headers.append("Content-Type", "application/json")
        headers.append("Authorization", "a5afefb56f050d4f0719a29cc2b5b57fc")
        headers.append("User-Agent", "SevdeskHandler/RentJoelRuizCabrera")
        headers.append("Access-Control-Allow-Origin", "*")
        headers.append("Accept", "application/json")

        return headers
    }

    async createOrder() {
        const userId = await this.handleContact(this.personalDetails)
        console.log(userId)
    }

    async handleContact(contact) {
        try {
            console.log(this.headers)
            const response: Response = await fetch(this.host + "/Contact", {
                method: "POST",
                headers: this.setHeader(),
                body: JSON.stringify({
                    surename: contact.firstName,
                    familyname: contact.lastName,
                    category: {
                        id: 3,
                        objectName: "Category"
                    }
                }),
                credentials: "same-origin",
                mode: "no-cors",
                cache: 'no-cache',
            })
            console.log(response)
        } catch (e) {
            console.log(e)
            return false
        }
    }
}