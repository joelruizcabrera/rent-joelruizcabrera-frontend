import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        products: []
    }),
    actions: {
        addToCart(product) {
            let tempArray = []

            if (this.products?.length >= 1) {
                tempArray = this.products.filter(x => x.id !== product.id)
            }
            tempArray.push(product)
            this.products = tempArray
        },
        removeProduct(id) {
            this.products = this.products.filter(x => x.id !== id)
        },
        removeCart() {
            this.products = []
        }
    },
    getters: {
        getCartLength: (state) => {
            return state.products?.length
        },
        getProducts: (state) => state.products
    },
})