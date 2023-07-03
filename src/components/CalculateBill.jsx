import { useState } from "react"
import SelectTip from "./SelectTip"
import Total from "./Total"
import NumberOfPeople from "./NumberOfPeople"
import ResetButton from "./Button"


export function Bill() {
    const [bill, setBill] = useState('')
    const [peopleCount, setPeopleCount] = useState(1)
    const [tipPercentage, setTipPercentage] = useState(0)
    const [customTip, setCustomTip] = useState('')

    const regexNumbersOnly = /^[1-9]\d*$/;

    // Handle state change, passing to child component. Let's lift this state up
    const handleStateChangeBill = (newValue) => {
        setBill(newValue)
    }

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

    // Reset button


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
            <SelectTip 
                tipPercentage={tipPercentage} 
                onStateChangeTipPercentage={handleStateChangeTipPercentage}
                customTip={customTip} 
                onStateChangeCustomTip={handleStateChangeCustomTip}
                bill={bill}
            />
            <NumberOfPeople
                peopleCount={peopleCount}
                onStateChangePeopleCount={handleStateChangePeopleCount}
                regexNumbersOnly={regexNumbersOnly}
            />
            <Total 
                bill={bill}
                tipPercentage={tipPercentage}
                peopleCount={peopleCount}
            />
            <ResetButton
                onStateChangeBill={handleStateChangeBill}
                onStateChangePeopleCount={handleStateChangePeopleCount}
                onStateChangeTipPercentage={handleStateChangeTipPercentage}
                onStateChangeCustomTip={handleStateChangeCustomTip}
            />
        </div>
    )
}