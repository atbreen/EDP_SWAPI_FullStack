import { useEffect, useState } from "react"

export default function useGetCrossDocument(collection, id, crossCollection) {
    const [character, setCharacter] = useState([])
    useEffect(() => { 
        setCharacter([])
        if (!id) return
        let cancelled = false
        fetch(`/api/${collection}/${id}/${crossCollection}`)
            .then(res => res.json())
            .then(character => {
                if (!cancelled) {
                    //  set character only if user is still on page
                    setCharacter(character)
                }
            })
        // prevent error from user navigating away from page.
        return () => {
            cancelled = true
        }
    }, [id])

    return (
        character
    )
}