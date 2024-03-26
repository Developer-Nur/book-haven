
import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './cmponents/Root/Root';
import ErrorPage from './cmponents/ErrorPage/ErrorPage';
import Home from './cmponents/Home/Home';
import AllBooks from './cmponents/AllBooks/AllBooks';
import PagesToRead from './cmponents/PagesToRead/PagesToRead';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage> ,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedBooks",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
