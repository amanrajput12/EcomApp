import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Product from './ProducList/ProductSlice.jsx'
import ProductDetail from './ProducList/ProductDetail.jsx'
import Login from './Auth/Login.jsx'
import {Provider} from "react-redux"
import AppStore from '../Store/Store.js'
import Ecom from './Ecom.jsx'
import Cart from './Cart/Cart.jsx'
import Checkout from './Order/Checkout.jsx'
const route = createBrowserRouter([
  {
    path:'/',
    element:<Login/>,
    
  },
  {
    path:'/Ecom',
    element:<Ecom/>,
    children:[
      {
        path:"home",
        element:<App/>
      },

      {
        path:'product-detail/:params',
        element:<ProductDetail/>
      }
    ]
  },
  {
    path:'/cart',
    element:<Cart/>
  },
  {
    path:'/checkout',
    element:<Checkout/>
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={AppStore}>
 <RouterProvider router={route}>

 </RouterProvider>
 </Provider>
)
