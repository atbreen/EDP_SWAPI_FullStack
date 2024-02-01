import Search from "./Search"
import Characters from "./Characters"
import Films from "./Films"
import Planets from "./Planets"

export default function Home() {
    return (
        <>
            <section>

            <h1>Star Wars Universe Lookup</h1>
            <h2>These <i>are</i> the droids you're looking for...</h2>
            <Search/>
            </section>
            
            <Characters/>

        </>
    )
}