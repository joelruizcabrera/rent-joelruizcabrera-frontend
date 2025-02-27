import {PiniaPluginContext, StateTree, SubscriptionCallbackMutation} from "pinia";

export default defineNuxtPlugin(({$pinia}) => {
    $pinia.use(StoragePiniaPlugin)
})

async function StoragePiniaPlugin(context: PiniaPluginContext) {
    if (context.store.$id === "cart") {
        if (!process.server) {
            const initialCartFromStorage = localStorage.getItem("cart")
            context.store.$state.products = JSON.parse(initialCartFromStorage)
        }
    }


    console.log(context.store)
    let defaultPreCart = undefined
    context.store.$subscribe((event: SubscriptionCallbackMutation<StateTree>) => {
        if ((event.events as any).key === "products") {
            localStorage.setItem("cart", JSON.stringify((event.events as any).newValue) || false)
        }
    })
}