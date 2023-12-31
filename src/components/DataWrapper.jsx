import { useState } from "react"
import '../styles/data-wrapper.css'
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
    const [selectedButton, setSelectedButton] = useState(null)


    const regexNumbersOnly = /^(0|[1-9]\d*)$/;
    const regexMoney = /^(?!0\d)\d*(\.\d{0,2})?$/

    // Lifting State
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

    const handleStateChangeSelectedButton = (newValue) => {
        setSelectedButton(newValue)
    }
    // End of lifting State

    return (
        <div className="tip-calculator">
            <section className="calculation-container">
                <h2 className="visuallyhidden">Calculation section</h2>
                <Bill 
                    bill={bill}
                    onStateChangeBill={handleStateChangeBill}
                    regexMoney={regexMoney}
                />
                <SelectTip 
                    onStateChangeTipPercentage={handleStateChangeTipPercentage}
                    customTip={customTip} 
                    onStateChangeCustomTip={handleStateChangeCustomTip}
                    selectedButton={selectedButton}
                    onStateChangeSelectedButton={handleStateChangeSelectedButton}
                    regexMoney={regexMoney}
                />
                <NumberOfPeople
                    peopleCount={peopleCount}
                    onStateChangePeopleCount={handleStateChangePeopleCount}
                    regexNumbersOnly={regexNumbersOnly}
                />
            </section>
            <section className="summary-container">
                <h2 className="visuallyhidden">Summary of totals</h2>
                <TipAmount
                    bill={bill}
                    tipPercentage={tipPercentage}
                    peopleCount={peopleCount}
                    customTip={customTip}
                />
                <Total
                    bill={bill}
                    tipPercentage={tipPercentage}
                    peopleCount={peopleCount}
                    customTip={customTip}
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
                    onStateChangeSelectedButton={handleStateChangeSelectedButton}
                />
            </section>
        </div>
    )
}