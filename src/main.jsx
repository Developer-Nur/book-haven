
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
import PagesToRead from './cmponents/PagesToRead/PagesToRead';
import ListBooks from './cmponents/ListBooks/ListBooks';
import BookDetail from './cmponents/BookDetail/BookDetail';

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
        element: <ListBooks></ListBooks>,
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/bookDetail/:id",
        element: <BookDetail></BookDetail>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
