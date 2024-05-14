import { useEffect, useState } from "react"

type Quote = {
    id: number
    quote: string
    author: string
}
type QuotesResponse = { quotes: Quote[] }

function delayAsync(ms: number) { return new Promise((resolve) => { setTimeout(resolve, ms) }) }

/**
 * LoadQuotes hook to fetch n quotes from dummyjson
 */
export function useQuotes(n: number): [Quote[], boolean ] {
    const [quotes, setQuotes] = useState<Quote[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchQuotes = async () => {
            setLoading(true)
            const data = await (await fetch("https://dummyjson.com/quotes?limit=100")).json()
            const quotesResponse = data as QuotesResponse
            await delayAsync(1_000)
            setLoading(false)
            setQuotes(quotesResponse.quotes)
        }
        fetchQuotes();
    }, [n])
    return [ quotes, loading ]
}

export function Quotes() {
    console.log("rendering")
    const [ quotes, loading ] = useQuotes(5)
    if (loading) {
        return <div>Backend arbeitet hart</div>
    }
    return <div className="flex flex-col p-4">
        {quotes.map((q) => (
            <div key={q.id} className="flex flex-col pb-4">
                <div>{q.quote}</div>
                <div className="text-xs">{q.author}</div>
            </div>
        ))}
    </div>
}