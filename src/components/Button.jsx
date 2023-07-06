import '../styles/button.css'

function Button({buttonClass, onClick, children, disabled=true }) {
    return (
        <button className={buttonClass} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

export default function ResetButton({ bill, peopleCount, tipPercentage, customTip, onStateChangeBill, onStateChangePeopleCount, onStateChangeTipPercentage, onStateChangeCustomTip, disabled }) {
    function handleOnClickReset() {
        onStateChangeBill('')
        onStateChangePeopleCount(1)
        onStateChangeTipPercentage(0)
        onStateChangeCustomTip('')
    }

    if (bill !== '' || tipPercentage !== 0  || tipPercentage !== 0) {
        disabled = false
    }

    return (
        <Button buttonClass="reset" onClick={handleOnClickReset} disabled={disabled}>
            Reset
        </Button>
    )
}