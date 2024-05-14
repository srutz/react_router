import { useEffect, useState } from "react"
import { useWindowSize } from "../WindowSize"

/**
 * a reacthook that triggers a re-render every periodMs 
 * @param periodMs 
 * @returns the number of re-renders triggered so far
 */
export function useInterval(periodMs: number) {
    const [timerCount, setTimerCount] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimerCount((oldCount) => oldCount + 1)
        }, periodMs)
        return () => {
            clearInterval(intervalId)
        }
    }, [ timerCount ])
    return timerCount
} 



export function Home() {

    const [count, setCount] = useState(0)
    const size = useWindowSize()
    useInterval(100)  // re-render every 500ms
    return (
        <div id="key123" className="flex flex-col">
            <div className="text-center text-4xl font-bold">{count}</div>
            <button onClick={() => setCount(count + 1)} >Increment</button>
            <div>Breite ist {size.width < 450 ? "schmal" : "breit"}</div>
            <div>{new Date().getTime()}</div>
        </div>
    )
}