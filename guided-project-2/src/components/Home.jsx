import Search from "./Search"
import GetAllCharacters from "./GetAllCharacters"

export default function Home() {
    return (
        <>
            <section>

            <h1>Star Wars Universe Lookup</h1>
            <h2>These <i>are</i> the droids you're looking for...</h2>
            <Search/>
            </section>
            
            <GetAllCharacters/>

        </>
    )
}