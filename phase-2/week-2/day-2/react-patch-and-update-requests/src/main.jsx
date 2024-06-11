import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import routes from './routes.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
)
