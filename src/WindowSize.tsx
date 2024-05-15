import { useEffect, useState } from "react"


type WindowSize = {
    width: number, height: number
}


export function useWindowSize() {

    const [ size, setSize ] = useState<WindowSize>({ width: window.innerWidth, height: window.innerHeight })
    useEffect(() => {
        const windowListener = () => {
            setSize({ width: window.innerWidth, height: window.innerHeight })
        }
        window.addEventListener('resize', windowListener)
        return () => {
            window.removeEventListener('resize', windowListener)
        }
    }, [])
    return size
}