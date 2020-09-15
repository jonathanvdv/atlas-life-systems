import { useEffect } from 'react'

export function useQuizBackground () {
    useEffect(() => {
        document.body.style.backgroundImage = "url('../images/grass.jpg')"
    })
}

export default useQuizBackground