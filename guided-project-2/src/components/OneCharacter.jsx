import { React, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useGetDocument from '../utils/useGetDocument'
import useGetCrossDocument from '../utils/useGetCrossDocument'

export default function OneCharacter() {
    const { id } = useParams()
    const character = useGetDocument("characters", id)
    const homeworld = useGetDocument("planets", character?.homeworld)
    const films = useGetCrossDocument("characters", id, "films")

    return (
        //  if character exists, render character's name
        character !== null ?
            <>
                <section id="charactersList">
                    <p>
                        <h1>
                            {character.name}
                        </h1>
                    </p>
                    <p>
                        <h3>Home World:</h3>
                        {homeworld === null ? null : homeworld.name}

                    </p>
                    <p>
                        <h3>Featured in...</h3>
                        {films.map(film =>
                            <Link
                                to={`/films/${film.id}`}
                                key={film.id}>
                                {film.title}</Link>)}
                    </p>
                </section>
            </> : null
    )
}