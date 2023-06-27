import { useState } from "react"

function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

export function PlayButton({ movieName }) {
    function handlePlayClick() {
        alert(`Playing ${movieName}`)
    }

    return (
        <Button onClick={handlePlayClick}>
            Hello
        </Button>
    )
}

export function IncrementButton() {
    let [indexNum, setIndexNum] = useState(0)
    function handleIncrementClick() {
        indexNum++
        console.log(indexNum, setIndexNum)
        setIndexNum(indexNum++)
    }

    return (
        <>
            {indexNum}
            <Button onClick={handleIncrementClick}>
                Increment button
            </Button>
        </>
    )
}