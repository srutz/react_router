import { useEffect, useState } from "react"

function delayAsync(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

/**
 * LoadQuotes hook to fetch n quotes from dummyjson
 */
export function useQuotes(n: number) {
    const [quotes, setQuotes] = useState<string[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchQuotes = async () => {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/data/quotes.json?limit=${n}`)
            const data = await response.json()
            await delayAsync(12000)
            setLoading(false)
            setQuotes(data)
        }

        fetchQuotes();
    }, [n])

    return quotes
}