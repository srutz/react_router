import { useEffect, useState } from "react"

type Quote = {
    id: number
    quote: string
    author: string
}
type QuotesResponse = { quotes: Quote[] }

function delayAsync(ms: number) { return new Promise((resolve) => { setTimeout(resolve, ms) }) }


/*
 * LoadQuotes hook to fetch n quotes from dummyjson
 * 
 * this hook returns an array of quotes, a boolean indicating if the backend is loading, and an error message
 * the error message is undefined if no error occurred 
 */
export function useQuotes(n: number): [Quote[], boolean, string | undefined ] {
    const [quotes, setQuotes] = useState<Quote[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | undefined>(undefined)

    useEffect(() => {
        const fetchQuotes = async () => {
            setLoading(true)
            try {
                const response = await fetch("https://dummyjson.com/quotes?limit=" + n)
                if (Math.floor(response.status / 100) !== 2) {
                    setError("Error fetching data: " + response.status + " " + response.statusText || "")
                    return
                }
                const data = await response.json()
                const quotesResponse = data as QuotesResponse
                await delayAsync(1_000)   // simulated delay
                setQuotes(quotesResponse.quotes)
            } catch (err) {
                setError((err as any).message || 'Exception while fetching data')
            } finally {
                setLoading(false)
            }
        }
        fetchQuotes()
    }, [n])
    return [ quotes, loading, error ]
}

export function Quotes() {
    console.log("rendering")
    const [ quotes, loading, error ] = useQuotes(5)
    if (error) {
        return <div>Fehler bei der Abfrage {error}</div>
    }
    if (loading) {
        return <div>Die Daten werden geladen</div>
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