import React from 'react'
import ReactDOM from 'react-dom/client'
import"../public/index.css";

import { RouterProvider } from 'react-router-dom'
import routes from './Components/App'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><RouterProvider router={routes}></RouterProvider></React.StrictMode>
)
