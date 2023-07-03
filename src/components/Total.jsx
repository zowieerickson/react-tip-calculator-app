export default function Total({ bill, tipPercentage, peopleCount }) {

    function calculateTotalPrice() {
        const tipPlusBill =  Number(bill) + Number((tipPercentage * bill).toFixed(2))
        if (bill > 0 && peopleCount > 0) {
            return (tipPlusBill / peopleCount ).toFixed(2)
        }

        if (bill > 0 && peopleCount == 0) {
            return (tipPlusBill).toFixed(2)
        }
    }

    return (
        <div>
            <h3>Total</h3>
            <p>/ person</p>
            <p>${calculateTotalPrice()}</p>
        </div>
    )
}