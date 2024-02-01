import { React, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useGetDocument from '../utils/useGetDocument'
import useGetCrossDocument from '../utils/useGetCrossDocument'

export default function OneFilm() {
    const {id} = useParams()
    const film = useGetDocument("films", id)
    const planetList = useGetCrossDocument("films", id, "planets")
    const charactersList = useGetCrossDocument("films", id, "characters")
   
    return (
        //  if film exists
        film !== null ? 
        <>
            <section id="charactersList">
                <p>
                    <h1>
                        {film.title}
                    </h1>
                </p>
                <p>
                    <h2>Characters</h2>
                </p>
                <p>
                    <h3>{charactersList.map(character => 
                        {character.name}
                    )}</h3>
                </p>
            </section>
        </> : null
    )
}