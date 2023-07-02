import { useState } from "react"
import SelectTip from "./SelectTip"
import Total from "./Total"


export function Bill() {
    const [bill, setBill] = useState('')
    const [peopleCount, setPeopleCount] = useState(1)
    const [tipPercentage, setTipPercentage] = useState(0)
    const [customTip, setCustomTip] = useState('')
    const [tipAmount, setTipAmount] = useState('')
    // let tipAmount = 0;

    const regexNumber = /^[1-9]\d*$/;

    // Handle state change, passing to child component. Let's lift this state up
    const handleStateChangeCustomTip = (newValue) => {
        setCustomTip(newValue)
    }

    const handleStateChangeTipPercentage = (newValue) => {
        setTipPercentage(newValue)
    }

    const handleStateChangeBill = (newValue) => {
        setBill(newValue)
    }

    const handleTipAmount = (newValue) => {
        setTipAmount(newValue)
    }
    // 

    function handleBillChange(e) {
        if (e.target.value === "" || regexNumber.test(e.target.value)) {
            handleStateChangeBill(e.target.value);
        }
    }

    function handlePeopleCountChange(e) {
        if (e.target.value === "" || regexNumber.test(e.target.value)) {
            setPeopleCount(e.target.value)
        }
    }

    function calculateTotalPrice() {
        const tipPlusBill =  Number(bill) + Number((tipPercentage * bill).toFixed(2))
        // console.log(`This is in Bill Component. tipAmount is ${tipAmount}`)
        if (bill > 0 && peopleCount > 0) {
            return (tipPlusBill / peopleCount ).toFixed(2)
        }

        if (bill > 0 && peopleCount == 0) {
            return (tipPlusBill).toFixed(2)
        }
    }

    function handleOnClickReset() {
        setBill('')
        setPeopleCount(1)
        setTipPercentage(0)
        setCustomTip('')
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
            <SelectTip 
                tipPercentage={tipPercentage} 
                customTip={customTip} 
                bill={bill}
                tipAmount={tipAmount}
                onStateChangeTipPercentage={handleStateChangeTipPercentage}
                onStateChangeCustomTip={handleStateChangeCustomTip}
                onStateChangeBill={handleStateChangeBill}
                onStateChangeTipAmount={handleTipAmount}
            />
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
            <button onClick={handleOnClickReset}>Reset</button>
        </div>
    )
}