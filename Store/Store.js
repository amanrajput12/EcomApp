
import {configureStore} from "@reduxjs/toolkit"
import CartSlice from "./CartSlice.js"
import OrderSlice from "./OrderSlice.js"
import ProductSlice from "./ProductSlice.js"

const AppStore = configureStore({
reducer:{
    Cart:CartSlice,
    Order:OrderSlice,
    Product:ProductSlice
}
})

export default AppStore