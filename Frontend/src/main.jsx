import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Layout />}/>
    </> 
    
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
