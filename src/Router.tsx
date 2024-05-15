
import { Outlet, RouteObject, RouterProvider, createBrowserRouter, createHashRouter, useLocation, } from "react-router-dom"
import { MenuBar } from "./MenuBar"
import { Home } from "./routes/Home"
import { About } from "./routes/About"
import { Contact } from "./routes/Contact"
import { QuoteDetails, Quotes } from "./routes/Quotes"



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
            { path: '/quotes', element: <Quotes></Quotes>, children: [
                { 
                    path: '/quotes/:id/:sort', element: <QuoteDetails></QuoteDetails> },
            ],  },
        ],
    },
    {
        path: "/*", element: <NotFound></NotFound>
    },
]

export function NotFound() {
    const location = useLocation()
    return <div>Route not found: {location.pathname}</div>
}



const router = createHashRouter(allroutes)

export function Router() {
    return <RouterProvider router={router} />
}

/*
Normalen routen           |  Hash routes
---------------------------------------------------------
https://myapp/quotes      |  https://myapp/#/quotes
https://myapp/quotes/2    |  https://myapp/#/quotes/2

*/