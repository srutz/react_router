import { Outlet, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { Quote, useQuotes } from "../LoadQuotes"
import { useEffect, useState } from "react"

export function QuoteDetails() {
    const params = useParams()
    const { id } = params
    const [quote, setQuote] = useState<Quote|undefined>(undefined)

    useEffect(() => {
        (async () => {
            const response = await fetch("https://dummyjson.com/quotes/" + id)
            const json = await response.json()
            const quote = json as Quote
            setQuote(quote)
        })()
    }, [ id ])
    if (!quote) {
        return undefined
    }
    return <div className="flex flex-col gap-2">
        <div>Details zu Quote mit Id={id}</div>
        <div className="text-2xl">{quote.quote}</div>
        <div className="text-xs">{quote.author}</div>
    </div>
}

export function Quotes() {
    console.log("rendering")
    const [ quotes, loading, error ] = useQuotes(5)
    const navigate = useNavigate()
    const [ searchParams ] = useSearchParams()
    console.log(searchParams.get("sort"))
    
    if (error) {
        return <div>Fehler bei der Abfrage {error}</div>
    }
    if (loading) {
        return <div>Die Daten werden geladen</div>
    }
    const onClick = (quote: Quote) => {
        navigate("/quotes/" + quote.id)
    }
    return <div className="flex p-4 gap-4">
        <div className="flex flex-col">
        {quotes.map((q) => (
            <div key={q.id} onClick={() => { onClick(q) }} className="flex flex-col pb-4 cursor-pointer">
                <div>{q.quote}</div>
                <div className="text-xs">{q.author}</div>
            </div>
        ))}
        </div>
        <div><Outlet></Outlet></div>
    </div>
}