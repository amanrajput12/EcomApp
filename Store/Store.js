
import {configureStore} from "@reduxjs/toolkit"
import CartSlice from "./CartSlice.js"
import OrderSlice from "./OrderSlice.js"
import ProductSlice from "./ProductSlice.js"
import ProductDetailSlice from "./ProductDetailSlice.js"

const AppStore = configureStore({
reducer:{
    Cart:CartSlice,
    Order:OrderSlice,
    Product:ProductSlice,
    ProductDetail:ProductDetailSlice
}
})

export default AppStore