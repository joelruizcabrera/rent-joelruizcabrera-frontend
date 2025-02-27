export default defineNuxtPlugin(({$pinia}) => {
    $pinia.use(StoragePiniaPlugin)
})

async function StoragePiniaPlugin(context) {
    if (context.store.$id === "cart") {
        if (!process.server) {
            const initialCartFromStorage = localStorage.getItem("cart")
            context.store.$state.products = JSON.parse(initialCartFromStorage)
        }
    }


    console.log(context.store)
    let defaultPreCart = undefined
    context.store.$subscribe((event) => {
        if ((event.events).key === "products") {
            localStorage.setItem("cart", JSON.stringify((event.events).newValue) || false)
        }
    })
}