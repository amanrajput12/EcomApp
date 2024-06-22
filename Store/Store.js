
import {configureStore} from "@reduxjs/toolkit"
import CartSlice from "./CartSlice.js"
import OrderSlice from "./OrderSlice.js"

const AppStore = configureStore({
reducer:{
    Cart:CartSlice,
    Order:OrderSlice
}
})

export default AppStore