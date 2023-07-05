import { useState } from "react"
import '../styles/datawrapper.css'
import Bill from "./Bill"
import SelectTip from "./SelectTip"
import NumberOfPeople from "./NumberOfPeople"
import TipAmount from "./TipAmount"
import Total from "./Total"
import ResetButton from "./Button"


export default function DataWrapper() {
    const [bill, setBill] = useState('')
    const [peopleCount, setPeopleCount] = useState('')
    const [tipPercentage, setTipPercentage] = useState(0)
    const [customTip, setCustomTip] = useState('')

    const regexNumbersOnly = /^(0|[1-9]\d*)$/;

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
        <section className="tip-calculator">
            <div className="calculation-container">
                <Bill 
                    bill={bill}
                    onStateChangeBill={handleStateChangeBill}
                    regexNumbersOnly={regexNumbersOnly}
                />
                <SelectTip 
                    onStateChangeTipPercentage={handleStateChangeTipPercentage}
                    customTip={customTip} 
                    onStateChangeCustomTip={handleStateChangeCustomTip}
                    regexNumbersOnly={regexNumbersOnly}
                />
                <NumberOfPeople
                    peopleCount={peopleCount}
                    onStateChangePeopleCount={handleStateChangePeopleCount}
                    regexNumbersOnly={regexNumbersOnly}
                />
            </div>
            <div className="summary-container">
                <TipAmount
                    bill={bill}
                    tipPercentage={tipPercentage}
                />
                <Total 
                    bill={bill}
                    tipPercentage={tipPercentage}
                    peopleCount={peopleCount}
                />
                <ResetButton
                    bill={bill}
                    peopleCount={peopleCount}
                    tipPercentage={tipPercentage} 
                    customTip={customTip}
                    onStateChangeBill={handleStateChangeBill}
                    onStateChangePeopleCount={handleStateChangePeopleCount}
                    onStateChangeTipPercentage={handleStateChangeTipPercentage}
                    onStateChangeCustomTip={handleStateChangeCustomTip}
                />
            </div>
        </section>
    )
}