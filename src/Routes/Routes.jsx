import React from 'react'
import {
    createBrowserRouter,
  } from "react-router";
import Home from '../pages/Home/Home';
import App from '../App';
import NotFound from '../pages/NotFound/NotFound';
import BookDetails from '../Components/BookDetails/BookDetails';
import BookList from '../pages/BookList/BookList';
import BookRead from '../pages/BookRead/BookRead';

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        { 
            index: true,
            path: "/",
            loader: () => fetch("/BooksData.json"),
            Component: Home
        },
        {
            path: "bookDetails/:id",
            loader: () => fetch("/BooksData.json"),
            Component: BookDetails
        },
        {
            path: "booklist",
            loader: () => fetch("/BooksData.json"),
            Component: BookList
        },
        {
            path: "bookread",
            Component: BookRead
        }
      ]
    },
  ]);
