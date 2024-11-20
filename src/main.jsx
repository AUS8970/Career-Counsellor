import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.jsx'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ToastContainer> */}
    <AuthProvider>
      <RouterProvider router={routes}>

      </RouterProvider>
    </AuthProvider>
    {/* </ToastContainer> */}
  </StrictMode>,
)
