import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function GetAllCharacters() {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        fetch('/api/characters').then(res => res.json()).then(characters => setCharacters(characters))
    }, [])

    return (
        <>
            <h2>Characters</h2>
            <section id="characters">
                {characters.map(character => <Link
                    to={`/characters/${character.id}`}
                    key={character.id}>
                    {character.name}
                </Link>
                )}
            </section>
        </>

    )
}