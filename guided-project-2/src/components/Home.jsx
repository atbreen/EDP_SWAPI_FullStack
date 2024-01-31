import Search from "./Search"
import Characters from "./Characters"

export default function Home() {
    return (
        <>
            <h1>Star Wars Universe Lookup</h1>
            <h2>These <i>are</i> the droids you're looking for...</h2>
            <Search/>
            <Characters/>
        </>
    )
}