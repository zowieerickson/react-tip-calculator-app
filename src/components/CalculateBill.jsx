import { useState } from "react"
import Total from "./Total"



export function Bill() {
    const [bill, setBill] = useState('')
    const [peopleCount, setPeopleCount] = useState(1)

    const regexNumber = /^[0-9\b]+$/;

    function handleBillChange(e) {
        if (e.target.value === "" || regexNumber.test(e.target.value)) {
            setBill(e.target.value);
        }
    }

    function handlePeopleCountChange(e) {
        if (e.target.value === "" || regexNumber.test(e.target.value)) {
            setPeopleCount(e.target.value)
        }
    }

    function calculateTotalPrice() {
        if (bill > 0 && peopleCount > 0) {
            return (bill / peopleCount).toFixed(2)
        }

        if (bill > 0 && peopleCount == 0) {
            return bill
        }

    }

    return (
        <div>
            <h3>Bill</h3>
            <input 
                onChange={handleBillChange}
                value={bill}
                type="text"
                name=""
                id="" 
            />
            {/* Beginning of People Count: Module */}
            <h3>Number of People</h3>
            <input 
                onChange={handlePeopleCountChange} 
                type="text"
                value={peopleCount}
                name="" 
                id="" 
            />
            <p>{peopleCount} people</p>
            {/* End of People Count: Module */}
            <Total 
            totalPrice={calculateTotalPrice()}
            />
        </div>
    )
}