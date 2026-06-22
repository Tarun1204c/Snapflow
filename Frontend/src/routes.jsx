import { createBrowserRouter, Navigate } from 'react-router'
import Login from './features/auth/pages/login'
import Register from './features/auth/pages/register'
import Feed from './features/post/pages/Feed'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/login" />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path : '/',
        element : <Feed />
    }
])