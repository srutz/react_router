import { CSSProperties, ReactNode, useEffect, useState } from "react"

export function FadeIn({ delayMs = 0, children} : { delayMs?: number, children: ReactNode}) {
    const [ opacity, setOpacity] = useState(0)
    console.log("render with opacity=" + opacity)
    const style: CSSProperties = { 
        opacity: opacity,
        transition: "all 2500ms",
        transitionDelay: delayMs + "ms"
    }
    useEffect(() => {
        /* run this code when component is mounted */
        setOpacity(1)
    },[])
    return <div style={style}>{children}</div>
}