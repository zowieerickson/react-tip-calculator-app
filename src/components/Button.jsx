import '../styles/button.css'

function Button({buttonClass, onClick, children }) {
    return (
        <button className={buttonClass} onClick={onClick}>
            {children}
        </button>
    )
}

export default function ResetButton({ onStateChangeBill, onStateChangePeopleCount, onStateChangeTipPercentage, onStateChangeCustomTip }) {
    function handleOnClickReset() {
        onStateChangeBill('')
        onStateChangePeopleCount('')
        onStateChangeTipPercentage(0)
        onStateChangeCustomTip('')
    }

    return (
        <Button buttonClass="reset" onClick={handleOnClickReset}>
            Reset
        </Button>
    )
}