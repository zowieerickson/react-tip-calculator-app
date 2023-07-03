export default function TipAmount({ tipPercentage, bill }) {

    function calculateTipAmount() {
        return (tipPercentage * bill).toFixed(2);
      }

    return <p>Tip Amount: ${calculateTipAmount()}</p>
}

