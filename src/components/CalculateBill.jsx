import { useState } from "react"
import Total from "./Total"


export function Bill() {
    const [bill, setBill] = useState('')
    const [peopleCount, setPeopleCount] = useState(1)
    const [tipPercentage, setTipPercentage] = useState(0)
    let tipAmount;

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

    function handleClickAddTip5() {
        return setTipPercentage(.05)
    }

    function handleClickTipAmount() {
        tipAmount = (tipPercentage * bill).toFixed(2)
        return tipAmount
    }

    function calculateTotalPrice() {
        if (bill > 0 && peopleCount > 0) {
            return (bill / peopleCount + Number(tipAmount)).toFixed(2)
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
            {/* Beginning of Tip Module */}
            <h3>Select Tip %</h3>
            <button onClick={handleClickAddTip5}>5 %</button>
            <button>10%</button>
            <button>15%</button>
            <button>25%</button>
            <button>50%</button>
            <p>Tip Amount: ${handleClickTipAmount()}</p>
            {/* End of Tip Module */}
            {/* Beginning of People Count Module */}
            
            <h3>Number of People</h3>
            <input 
                onChange={handlePeopleCountChange} 
                type="text"
                value={peopleCount}
                name="" 
                id="" 
            />
            <p>{peopleCount} people</p>
            {/* End of People Count Module */}
            <Total 
            totalPrice={calculateTotalPrice()}
            />
        </div>
    )
}