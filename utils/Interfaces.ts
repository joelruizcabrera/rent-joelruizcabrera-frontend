export interface LineItemInterface {
    id: number;
    name: string;
    netPrice: number;
    scheduled: {
        days?: number;
        startDate: number;
        endDate: number;
    }
}

export interface RequestInterface {
    requestId: string;
    cartItems: Array<LineItemInterface>[];
    personalDetails: Object;
}

export interface PersonalAddressInterface {
    street: string;
    houseNr: string;
    postalCode: string;
    city: string;
}

export interface PersonalDetailsInterface {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    address: PersonalAddress
}