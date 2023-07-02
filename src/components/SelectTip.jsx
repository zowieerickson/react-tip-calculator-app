export default function SelectTip({
    customTip,
    tipPercentage,
    bill,
    tipAmount,
    onStateChangeCustomTip,
    onStateChangeTipPercentage,
    onStateChangeTipAmount,
  }) {
    const regexNumber = /^[1-9]\d*$/;
  
    function handleClickAddTip(e) {
      onStateChangeCustomTip('');
      onStateChangeTipPercentage(e.target.value / 100);
    }
  
    function handleClickAddTipCustom(e) {
      if (e.target.value === '' || regexNumber.test(e.target.value)) {
        onStateChangeTipPercentage(e.target.value / 100);
        onStateChangeCustomTip(e.target.value);
      }
    }
  
    function calculateTipAmount() {
        console.log((tipPercentage * bill).toFixed(2))
      return (tipPercentage * bill).toFixed(2);
    }
  
    return (
      <div>
        <h3>Select Tip %</h3>
        <button onClick={handleClickAddTip} value="5">
          5%
        </button>
        <button onClick={handleClickAddTip} value="10">
          10%
        </button>
        <button onClick={handleClickAddTip} value="15">
          15%
        </button>
        <button onClick={handleClickAddTip} value="25">
          25%
        </button>
        <button onClick={handleClickAddTip} value="50">
          50%
        </button>
        <input
          onChange={handleClickAddTipCustom}
          type="text"
          placeholder="Custom"
          value={customTip}
          name=""
          id=""
        />
        <p>Tip Amount: ${calculateTipAmount()}</p>
      </div>
    );
  }