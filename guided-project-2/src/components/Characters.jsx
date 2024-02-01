import { React, useState, useEffect } from 'react'

export default function Characters() {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        fetch('/api/characters').then( res => res.json()).then(characters => setCharacters(characters))
    }, [])

    return (
        <>
            <h2>Characters</h2>
                <section id="characters">
                    {characters.map(character => character.name)}
                </section>
        </>

    )
}