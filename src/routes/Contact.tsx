import { useWindowSize } from "../WindowSize"


export function Contact() {
    console.log("Rendering Contact")
    const size = useWindowSize()
    return (
        <div data-reactcomp={new Date().toLocaleTimeString()} className="flex flex-col gap-4" >
            <div>width={size.width}, height={size.height}</div>
            {size.width < 400 && <div>zu schmal</div>}
        </div>)
}
