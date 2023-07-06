import '../styles/summary.css'

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
        <div className="summary-row total">
            <p className="summary-row-title">Total <span className="summary-row-subhead">/ person</span></p>
            <p className="summary-amount">${calculateTotalPrice() == undefined ? '0.00' : calculateTotalPrice()}</p>
        </div>
    )
}