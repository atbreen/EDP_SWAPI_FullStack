import { React, useState, useEffect } from 'react'

export default function GetAllPlanets() {
    const [planets, setPlanets] = useState([])
    useEffect(() => {
        fetch('/api/planets').then( res => res.json()).then(planets => setPlanets(planets))
    }, [])

    return (
        <>
            <h1>Planets</h1>
                <section id="planets">
                    {planets.map(planet => planet.name)}
                </section>
        </>

    )
}