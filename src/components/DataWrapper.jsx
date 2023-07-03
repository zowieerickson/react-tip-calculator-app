import { useState } from "react"
import Bill from "./Bill"
import SelectTip from "./SelectTip"
import NumberOfPeople from "./NumberOfPeople"
import Total from "./Total"
import ResetButton from "./Button"


export default function DataWrapper() {
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
    // End of lifting State

    return (
        <div>
            <Bill 
                bill={bill}
                onStateChangeBill={handleStateChangeBill}
                regexNumbersOnly={regexNumbersOnly}
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