import { NavLink, useLocation } from "react-router-dom"

export function MenuBar() {
    const menuitems: { id: number, display: string, link: string }[] = [
        { id: 1, display: 'Home', link: '/' },
        { id: 2, display: 'About', link: '/about' },
        { id: 3, display: 'Contact', link: '/contact' },
        { id: 4, display: 'Quotes', link: '/quotes' }
    ]
    const location = useLocation()
    console.log("Menubar render")

    function NavTitle({title}: {title: string}) {
        return <div className="text-xl font-bold truncate">{title}</div>
    }

    return (
        <div className="flex gap-4 bg-white items-baseline self-stretch p-4 border-b border-gray-300">
            <NavTitle title="React Cologne" />
            <div className="w-8"></div>
            {menuitems.map((item) => <NavLink key={item.id} to={item.link}>{item.display}</NavLink>)}
            <div className="grow"></div>
            <div>{location.pathname}</div>
        </div>
    )
}