import { React, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useGetDocument from '../utils/useGetDocument'

export default function OneFilm() {
    const { id } = useParams()
    const planet = useGetDocument("planets", id)

    return (
        //  if planet exists
        planet !== null ?
            <>
                <section id="charactersList">
                    <p>
                        <h1>
                            {planet.name}
                        </h1>
                    </p>
                    <p>
                        <h2>Planet</h2>
                    </p>
                    <p>
                        <h3>Climate</h3>
                        {planet.climate}
                        
                    </p>
                </section>
            </> : null
    )
}