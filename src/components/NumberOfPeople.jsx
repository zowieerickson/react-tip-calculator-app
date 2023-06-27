import { useState } from "react"

export default function NumberOfPeople( {howManyPeople} ) {
    const [peopleCount, setPeopleCount] = useState(0)

    function handlePeopleCountChange(e) {
        setPeopleCount(e.target.value)
    }

    return (
        <div>
            <h3>Number of People</h3>
            <input onChange={handlePeopleCountChange} type="text" name="" id="" />
            <p>{howManyPeople} people</p>
        </div>
    )
}

