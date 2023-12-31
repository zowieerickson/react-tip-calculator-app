import '../styles/select-tip.css'

export default function SelectTip({
    customTip,
    onStateChangeCustomTip,
    onStateChangeTipPercentage,
    selectedButton,
    onStateChangeSelectedButton,
    regexMoney
  }) {


    function handleClickSelectedButton(buttonId) {
      onStateChangeSelectedButton(buttonId)
    }

    function handleClickAddTip(e) {
      onStateChangeCustomTip('');
      onStateChangeTipPercentage(e.target.value / 100);
    }
  
    function handleClickAddTipCustom(e) {
      if (e.target.value === '' || regexMoney.test(e.target.value)) {
        onStateChangeTipPercentage(e.target.value / 100);
            if(e.target.value > 100) {
                e.target.value = 100;
                onStateChangeTipPercentage(100 / 100)
            }
        onStateChangeCustomTip(e.target.value);
      }
    }
  
    return (
      <section className="tips">
        <h2 className="visuallyhidden">Select Tip</h2>
        <label htmlFor="select-tip" className="tip-title">Select Tip %</label>
        <div className="tip-buttons-wrapper">
          <button className={`tip-buttons tip-percentage ${selectedButton === 1 && 'selected-button'}`}  
          onClick={(e) => {
            handleClickSelectedButton(1)
            handleClickAddTip(e)
            }} 
          value="5">
          5%
          </button>
          <button className={`tip-buttons tip-percentage ${selectedButton === 2 && 'selected-button'}`} 
          onClick={(e) => {
            handleClickSelectedButton(2)
            handleClickAddTip(e)
            }} 
          value="10">
          10%
          </button>
          <button className={`tip-buttons tip-percentage ${selectedButton === 3 && 'selected-button'}`} 
          onClick={(e) => {
            handleClickSelectedButton(3)
            handleClickAddTip(e)
          }} 
          value="15">
          15%
          </button>
          <button className={`tip-buttons tip-percentage ${selectedButton === 4 && 'selected-button'}`} 
          onClick={(e) => {
            handleClickSelectedButton(4)
            handleClickAddTip(e)
          }}
          value="25">
          25%
          </button>
          <button className={`tip-buttons tip-percentage ${selectedButton === 5 && 'selected-button'}`} 
          onClick={(e) => {
            handleClickSelectedButton(5)
            handleClickAddTip(e)
          }}
          value="50">
          50%
          </button>
          <input className={`tip-custom tip-percentage ${customTip === '.' && 'error-input'}`}
            onClick={() => {
              handleClickSelectedButton(6)
            }}
            onBlur={() => {
              handleClickSelectedButton(6)
            }}
            onChange={handleClickAddTipCustom}
            type="text"
            placeholder="Custom"
            inputMode="decimal"
            value={customTip}
            id="select-tip"
            name="select-tip"
          />
        </div>
      </section>
    );
  }