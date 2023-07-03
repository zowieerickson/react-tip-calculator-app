function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

export default function ResetButton({ onStateChangeBill, onStateChangePeopleCount, onStateChangeTipPercentage, onStateChangeCustomTip }) {
    function handleOnClickReset() {
        onStateChangeBill('')
        onStateChangePeopleCount(1)
        onStateChangeTipPercentage(0)
        onStateChangeCustomTip('')
    }

    return (
        <Button onClick={handleOnClickReset}>
            Reset
        </Button>
    )
}