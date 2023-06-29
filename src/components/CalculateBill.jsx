import { useState } from "react"
import Total from "./Total"


export function Bill() {
    const [bill, setBill] = useState('')
    const [peopleCount, setPeopleCount] = useState(1)
    const [tipPercentage, setTipPercentage] = useState(0)
    let tipAmount = 0;

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

    function handleTipChange(e) {
        if (e.target.value === "" || regexNumber.test(e.target.value)) {
            tipPercentage(e.target.value);
        }
    }

    // Adjust tip state
    function handleClickAddTip(e) {
        return setTipPercentage(e.target.value / 100)
    }

    // Custom tip
    function handleClickAddTipCustom() {
        return setTipPercentage(.05)
    }

    function handleClickTipAmount() {
        tipAmount = (tipPercentage * bill).toFixed(2)
        return tipAmount
    }

    function calculateTotalPrice() {
        if (bill > 0 && peopleCount > 0) {
            const tipPlusBill =  Number(bill) + Number(tipAmount)
            return (tipPlusBill / peopleCount ).toFixed(2)
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
            <button onClick={handleClickAddTip} value="5">5</button>
            <button onClick={handleClickAddTip} value="10">10%</button>
            <button onClick={handleClickAddTip} value="15">15%</button>
            <button onClick={handleClickAddTip} value="25">25%</button>
            <button onClick={handleClickAddTip} value="50">50%</button>
            <input 
                onChange={handleTipChange}
                value={tipPercentage}
                type="text"
                name=""
                id="" 
            />
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