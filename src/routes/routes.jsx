import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from "../pages/Home"
import Error from '../pages/Error';
import ServiceDetails from '../components/ServiceDetails';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';
import Register from '../pages/Register';
import Profile from '../components/Profile';
import MainRoutes from './MainRoutes';
import Program from '../components/Program';
import ForgetPassword from '../pages/ForgetPassword';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <MainRoutes></MainRoutes>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/program",
        element: ( <PrivateRoute> <Program/> </PrivateRoute> ),
      },
      {
        path: "/services/:id",
        element: ( <PrivateRoute> <ServiceDetails /> </PrivateRoute>),
      },
      {
        path: "/profile",
        element: ( <PrivateRoute> <Profile /> </PrivateRoute>),
      },
      {
        path: "forget-password",
        element: <ForgetPassword></ForgetPassword>
      }, 
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ]
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default routes;