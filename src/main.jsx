import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Contexts/AuthProvider.jsx';
import Home from './Pages/Home/Home.jsx';
import Blog from './Pages/Blog/Blog.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Login/Register.jsx';
import Chefrecipe from './Pages/ChefRecipe/Chefrecipe.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import { Toaster } from 'react-hot-toast';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      {
        path: "/chef-recipes/:id", element: <PrivateRoute><Chefrecipe></Chefrecipe></PrivateRoute>,
        loader: ({ params }) => fetch(`https://french-food-server-devpro-sajid.vercel.app/chef/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster/>
    </AuthProvider>
  </React.StrictMode>
)
