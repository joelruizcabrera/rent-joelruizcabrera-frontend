import { defineStore } from 'pinia'
import {useLocalStorage} from '@vueuse/core'

export const useCartStore = defineStore('cart', {
    state: () => ({
        products: []
    }),
    actions: {
        addToCart(product: Object) {
            let tempArray = []
            tempArray = this.$state.products.filter(x => x.id != product.id)
            tempArray.push(product)
            this.$state.products = tempArray
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