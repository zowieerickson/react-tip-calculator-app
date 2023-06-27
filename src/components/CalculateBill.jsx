import { useState } from "react"
import Total from "./Total"
import NumberOfPeople from "./NumberOfPeople"



export function Bill() {
    const [bill, setBill] = useState(0)
    const [peopleCount, setPeopleCount] = useState(0)


    function handleBillChange(e) {
        setBill(e.target.value)
    }

    function handlePeopleCountChange(e) {
        setPeopleCount(e.target.value)
    }

    function calculateTotalPrice() {
        return (
            bill > 0 && peopleCount > 0 ? bill / peopleCount : null
            
        )
    }

    return (
        <div>
            <h3>Bill</h3>
            <input onChange={handleBillChange} type="text" name="" id="" />
            {/* Beginning of People Count: Module */}
            <h3>Number of People</h3>
            <input onChange={handlePeopleCountChange} type="text" name="" id="" />
            <p>{peopleCount} people</p>
            {/* End of People Count: Module */}
            <Total 
            totalPrice={calculateTotalPrice()}
            />
        </div>
    )
}