import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Detaildiv from './components/Detaildiv.jsx';
import './index.css'
import Daftar from './components/Daftar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/detail",
    element: <Detaildiv/>
  },
  {
    path: "/daftar",
    element: <Daftar/>
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
