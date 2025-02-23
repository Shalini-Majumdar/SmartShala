import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx'
import Signin from './pages/Signin.jsx'
import Form from './pages/Form.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router=createBrowserRouter([
  {
    path:"/signup",
    element:<Signup/>
  },
  {   
    path:"/signin",
    element:<Signin/>
  },
  {
    path:"/form",
    element:<Form/>
  },
  {
    path:"/home",
    element:<Home/>
  }


 
 
]);


  



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
    
  </StrictMode>,
)
