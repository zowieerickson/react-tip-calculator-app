import { useState } from "react"
import SelectTip from "./SelectTip"
import Total from "./Total"
import NumberOfPeople from "./NumberOfPeople"


export function Bill() {
    const [bill, setBill] = useState('')
    const [peopleCount, setPeopleCount] = useState(1)
    const [tipPercentage, setTipPercentage] = useState(0)
    const [customTip, setCustomTip] = useState('')

    const regexNumbersOnly = /^[1-9]\d*$/;

    // Handle state change, passing to child component. Let's lift this state up
    const handleStateChangeCustomTip = (newValue) => {
        setCustomTip(newValue)
    }

    const handleStateChangeTipPercentage = (newValue) => {
        setTipPercentage(newValue)
    }

    const handleStateChangePeopleCount = (newValue) => {
        setPeopleCount(newValue)
    }
    // 

    function handleBillChange(e) {
        if (e.target.value === "" || regexNumbersOnly.test(e.target.value)) {
            setBill(e.target.value);
        }
    }



    function calculateTotalPrice() {
        const tipPlusBill =  Number(bill) + Number((tipPercentage * bill).toFixed(2))
        if (bill > 0 && peopleCount > 0) {
            return (tipPlusBill / peopleCount ).toFixed(2)
        }

        if (bill > 0 && peopleCount == 0) {
            return (tipPlusBill).toFixed(2)
        }
    }

    // Reset button
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
                onStateChangeTipPercentage={handleStateChangeTipPercentage}
                customTip={customTip} 
                onStateChangeCustomTip={handleStateChangeCustomTip}
                bill={bill}
            />
            {/* End of Tip Module */}

            {/* Beginning of People Count Module */}
            <NumberOfPeople
                peopleCount={peopleCount}
                onStateChangePeopleCount={handleStateChangePeopleCount}
                regexNumbersOnly={regexNumbersOnly}
            />
            {/* End of People Count Module */}
            <Total 
            totalPrice={calculateTotalPrice()}
            />
            <button onClick={handleOnClickReset}>Reset</button>
        </div>
    )
}