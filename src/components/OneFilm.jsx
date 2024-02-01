import { React, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useGetDocument from '../utils/useGetDocument'
import useGetCrossDocument from '../utils/useGetCrossDocument'

export default function OneFilm() {
    const {id} = useParams()
    const film = useGetDocument("films", id)
    // const planets = useGetCrossDocument("films", id, "planets")
    const characters = useGetCrossDocument("films", id, "characters")
    console.log({characters})
   
    return (
        //  if film exists
        film !== null ? 
        <>
            <section id="charactersList">
                <div>
                    <h1>
                        {film.title}
                    </h1>
                </div>
                <div>
                    <h2>Characters</h2>
                </div>
                <div>
                    <h3>
                    {characters.map(character => 
                    character.name)}
                    </h3>
                </div>
            </section>
        </> : null
    )
}