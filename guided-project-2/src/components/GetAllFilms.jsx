import { React, useState, useEffect } from 'react'

export default function GetAllFilms() {
    const [films, setFilms] = useState([])
    useEffect(() => {
        fetch('/api/films').then(res => res.json()).then(films => setFilms(films))
    }, [])

    return (
        <>
            <section id="films">
                {films.map(film => film.title)}
            </section>
        </>

    )
}