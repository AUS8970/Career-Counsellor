import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from "../pages/Home"
import Error from '../pages/Error';
import ServiceDetails from '../components/ServiceDetails';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';
import Register from '../pages/Register';
import Services from '../components/Services';
import Profile from '../components/Profile';
import MainRoutes from './MainRoutes';

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home></Home>,
//   },
//   {
//     path: "profile",
//     element: <Profile></Profile>
//   },
//   {
//     path: "services",
//     element: <Services></Services>
//   },
//   {
//     path: "/services/:id",
//     element: <PrivateRoute> <ServiceDetails></ServiceDetails> </PrivateRoute>,
//   },
//   {
//     path: "login",
//     element: <Login></Login>
//   },
//   {
//     path: "register",
//     element: <Register></Register>
//   },
//   {
//     path: "*",
//     element: <Error></Error>  
//   }
// ])

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
        path: "/services",
        element: ( <PrivateRoute> <Services /> </PrivateRoute> ),
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