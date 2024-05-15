import { FadeIn } from "../FadeIn"

export function About() {

    const elems: JSX.Element[] = []
    for (let i = 0; i < 32; i++) {
        elems.push((
            <FadeIn key="key{i}" delayMs={i * 250}>
                <img className="mx-auto w-16" src="/pexelsinterior.jpg" alt="interior"></img>
            </FadeIn>
        ))
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="text-center text-4xl font-bold">About about about</div>
            <div className="grow flex flex-wrap gap-2">
                {elems}
            </div>
        </div>
    )
}