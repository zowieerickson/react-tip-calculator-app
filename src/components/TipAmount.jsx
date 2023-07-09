import '../styles/summary.css'

export default function TipAmount({
    tipPercentage,
    bill,
    peopleCount,
    customTip 
  }) {

    function calculateTipAmount() {
        if (peopleCount === '0' || bill === '.' || customTip === '.') {
          return (0).toFixed(2)
        } else if (peopleCount == '') {
          return (tipPercentage * bill).toFixed(2)
        } else {
          return ((tipPercentage * bill) / peopleCount).toFixed(2)
        }
      }

    return (
      <section className="summary-row tip">
        <p className="summary-row-title">Tip Amount <span className="summary-row-subhead">/ person</span></p>
        <p className="summary-amount">${calculateTipAmount()}</p>
      </section>
    )
}

