
import { Outlet, RouteObject, RouterProvider, createBrowserRouter, useLocation, useNavigate } from "react-router-dom"
import { MenuBar } from "./MenuBar"
import { Home } from "./routes/Home"
import { About } from "./routes/About"
import { Contact } from "./routes/Contact"
import { Quotes } from "./routes/Quotes"
import { useEffect } from "react"


function Content() {
    return (
        <>
            <MenuBar />
            <div className="h-1 grow flex flex-col items-center bg-gray-300 pt-4 overflow-y-auto">
                <Outlet></Outlet>
            </div>
        </>
    )
}


export const allroutes: RouteObject[] = [
    {
        path: '/',
        element: <Content></Content>,  // hier <Outlet> benutzen
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/about', element: <About></About>,
                children: [
                    {
                        path: "/about/detailinfo", element: <div>Interessante Details</div>
                    }
                ] },
            { path: '/contact', element: <Contact></Contact> },
            { path: '/quotes', element: <Quotes></Quotes> },
        ],
    },
    {
        path: "/*", element: <div>fallback</div>
    },
]


const router = createBrowserRouter(allroutes)

export function Router() {
    return <RouterProvider router={router} />
}
