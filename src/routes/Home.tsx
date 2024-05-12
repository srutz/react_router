import { useState } from "react"

export function Home() {

    const [count, setCount] = useState(0)

    return (
        <div className="flex flex-col">
        <div className="text-center text-4xl font-bold">{count}</div>
        <button onClick={() => setCount(count + 1)} >Increment</button>
    </div>
)
}