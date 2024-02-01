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
                    Planet info goes here!
                </section>
            </> : null
    )
}