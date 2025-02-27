import { defineStore } from 'pinia'
import {useLocalStorage} from '@vueuse/core'

export const useCartStore = defineStore('cart', {
    state: () => ({
        products: []
    }),
    actions: {
        addToCart(product: Object) {
            let tempArray = []
            console.log(this.products)
            console.log(tempArray)
            if (this.products?.length >= 1) {
                tempArray = this.products.filter(x => x.id != product.id)
            }
            tempArray.push(product)
            this.products = tempArray
            //localStorage.setItem('cart', JSON.stringify(this.products))
        },
        removeProduct(id: number) {
            this.products = this.products.filter(x => x.id != id)
        }
    },
    getters: {
        getCartLength: (state) => {
            return state.products?.length
        },
        getProducts: (state) => state.products
    },
})