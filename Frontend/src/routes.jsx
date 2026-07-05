import { createBrowserRouter } from 'react-router'
import Login from './features/auth/pages/login'
import Register from './features/auth/pages/register'
import Feed from './features/post/pages/Feed'
import { AuthProvider } from "./features/auth/auth.context"
import { PostContextProvider } from "./features/post/post.context"
import CreatePost from "./features/post/pages/CreatePost"

const Layout = ({children}) => (
    <AuthProvider>
        <PostContextProvider>
            {children}
        </PostContextProvider>
    </AuthProvider>
)

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout><Feed /></Layout>
    },
    {
        path: '/login',
        element: <Layout><Login /></Layout>
    },
    {
        path: '/register',
        element: <Layout><Register /></Layout>
    },
    {
        path:"/create-post",
        element: <Layout><CreatePost/></Layout>
    }
])