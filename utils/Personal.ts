import {PersonalDetailsInterface} from "~/utils/Interfaces";

export class PersonalAddress {
    street: string;
    houseNr: string;
    postalCode: string;
    city: string;
    constructor(
        street: string,
        houseNr: string,
        postalCode: string,
        city: string,
    ) {
        this.street = street;
        this.houseNr = houseNr;
        this.postalCode = postalCode;
        this.city = city;
    }
    validatePostalCode() {
        return this.postalCode
    }
    get(): PersonalAddressInterface {
        return {
            street,
            houseNr,
            postalCode,
            city,
        }
    }
}

export class PersonalDetails implements PersonalDetailsInterface {
    firstName;
    lastName;
    email;
    phone?;
    address;
    constructor(
        firstName: string,
        lastName: string,
        email: string,
        phone?: string,
        address: PersonalAddress
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone ?? null;
        this.address = address
    }
    getAll() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: this.phone,
            address: this.address<PersonalAddress>
        }
    }
}