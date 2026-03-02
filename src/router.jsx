import { createBrowserRouter } from "react-router-dom";
import Register from "./components/Register";
import App from "./App";
import Login from "./components/Login";
import Feed from "./components/Feed";
import ListPosts from "./pages/ListPost";
import CreatePost from "./pages/CreatePost";


export const router = createBrowserRouter([
   
    {
        element: <App/>,
        path: '/'
    },
    {
        element: <Register/>,
        path: '/register'
    },
    {
        element: <Login/>,
        path: '/login'
    },
     {
        element: <Feed/>,
        path: '/feed'
    },
    {
        element: <ListPosts/>,
        path: '/posts'
    },
      {
        element: <CreatePost/>,
        path: '/create-post'
    }
])