import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './assets/components/Home/Home.jsx'
import Layout from './Layout.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Checkout from './assets/components/checkout/Checkout.jsx'
import ItemView from './assets/components/itemView/ItemView.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"",
        element: <Home />
      },
      {
        path:"checkout",
        element: <Checkout />
      },
      {
        path:"item",
        element: <ItemView />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
