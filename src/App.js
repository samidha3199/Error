import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import {createBrowserRouter, RouterProvider} from "react-router-dom"


const AppLayout = ()=>{
    return(
        <>
            <Header/>
            <Body/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
    },
    {
        path:"/about",
        element:<About/>,
    },
    {
        path:"/contact",
        element: <Contact/>,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)