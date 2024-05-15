import { Outlet } from "react-router-dom"

export function About() {

    return (
        <div className="flex flex-col gap-4">
            <div className="text-center text-4xl font-bold">About about about</div>
            <div className="bg-red-300 m-4 p-4">
                <Outlet></Outlet>
            </div>
        </div>
    )
}