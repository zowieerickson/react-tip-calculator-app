export default function TipAmount({ tipPercentage, bill }) {

    function calculateTipAmount() {
        return (tipPercentage * bill).toFixed(2);
      }

    return (
      <div className="summary-row">
        <p className="summary-row-title">Tip Amount <span className="summary-row-subhead">/ person</span></p>
        <p className="summary-amount">${calculateTipAmount()}</p>
      </div>
    )
}

