import { React, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useGetDocument from '../utils/useGetDocument'

export default function OneFilmr() {
    const {id} = useParams()
    const film = useGetDocument("films", id)
   
    return (
        //  if film exists
        film !== null ? 
        <>
        <section id="charactersList">
            Film info goes here!
        </section>
        </> : null
    )
}