import { useEffect, useState } from "react"

export default function useGetDocument(collection, id) {
    const [character, setCharacter] = useState(null)
    useEffect(() => { 
        setCharacter(null)
        if (!id) return
        let cancelled = false
        fetch(`/api/${collection}/${id}`)
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