import { React, useState, useEffect } from 'react'

export default function Films() {
    const [films, setFilms] = useState([])
    useEffect(() => {
        fetch('/api/films').then( res => res.json()).then(films => setFilms(films))
    }, [])

    return (
        <>
            <h1>Films</h1>
                <section id="films">
                    {films.map(film => film.title)}
                </section>
        </>

    )
}