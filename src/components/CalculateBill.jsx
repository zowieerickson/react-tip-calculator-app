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

    // Adjust tip state
    function handleClickAddTip5() {
        return setTipPercentage(.05)
    }

    function handleClickAddTip10() {
        return setTipPercentage(.10)
    }

    function handleClickAddTip15() {
        return setTipPercentage(.15)
    }

    function handleClickAddTip25() {
        return setTipPercentage(.25)
    }

    function handleClickAddTip50() {
        return setTipPercentage(.50)
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
            <button onClick={handleClickAddTip5}>5%</button>
            <button onClick={handleClickAddTip10}>10%</button>
            <button onClick={handleClickAddTip15}>15%</button>
            <button onClick={handleClickAddTip25}>25%</button>
            <button onClick={handleClickAddTip50}>50%</button>
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