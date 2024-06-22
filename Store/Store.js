
import {configureStore} from "@reduxjs/toolkit"
import CartSlice from "./CartSlice.js"

const AppStore = configureStore({
reducer:{
    Cart:CartSlice
}
})

export default AppStore