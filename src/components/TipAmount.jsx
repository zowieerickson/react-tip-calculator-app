export default function TipAmount({ tipPercentage, bill, peopleCount }) {

    function calculateTipAmount() {
        if (peopleCount == '' || peopleCount == 0) {
          return (tipPercentage * bill).toFixed(2);
        }
        return ((tipPercentage * bill) / peopleCount).toFixed(2);
      }

    return (
      <div className="summary-row">
        <p className="summary-row-title">Tip Amount <span className="summary-row-subhead">/ person</span></p>
        <p className="summary-amount">${calculateTipAmount()}</p>
      </div>
    )
}

