import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        products: []
    }),
    actions: {
        addToCart(product: Object) {
            let tempArray = this.products.filter(x => x.id != product.id)
            tempArray.push(product)
            this.products = tempArray
        },
        removeProduct(id: number) {
            this.products = this.products.filter(x => x.id != id)
        }
    },
    getters: {
        getCartLength: (state) => state.products.length,
        getProducts: (state) => state.products
    },
})
