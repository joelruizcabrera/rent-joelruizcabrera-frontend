export default defineNuxtPlugin(({$pinia}) => {
    $pinia.use(StoragePiniaPlugin)
})

async function StoragePiniaPlugin(context) {
    if (context.store.$id === "cart") {
        console.log("i'm here")
        const initialCartFromStorage = localStorage.getItem("cart")
        context.store.$state.products = JSON.parse(initialCartFromStorage)
    }

    let defaultPreCart = undefined
    context.store.$subscribe((event, options) => {
        if (event.storeId === "cart") {
            localStorage.setItem("cart", JSON.stringify(options.products) || false)
        }
    })
}