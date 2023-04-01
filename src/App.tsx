import React from 'react'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import './styles.css'

import Layout from "@components/Layout/Layout";
import Test from "@components/Test/Test";
import Login from "@components/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Test />,
    },
    {
        path: "login",
        element: <Login />,
    },
]);

export function App() {

    return (
        <Layout>
            <RouterProvider router={router} />
        </Layout>
    );
}
