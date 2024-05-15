import { useQuotes } from "../LoadQuotes"

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