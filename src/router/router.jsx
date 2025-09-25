import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children : [
      {
        index : true,
        Component : Home
      }
    ]
  },
]);

export default router
