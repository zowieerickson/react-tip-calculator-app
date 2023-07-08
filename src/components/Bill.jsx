import '../styles/bill.css'

export default function Bill({ bill, onStateChangeBill, regexMoney }) {

    function handleBillChange(e) {
        if (e.target.value === "" || regexMoney.test(e.target.value)) {
            onStateChangeBill(e.target.value);
        }
    }

    return (
        <div>
            <label htmlFor="bill">Bill</label>
            <div className="bill-input">
                <svg className="icon-input icon-dollar-sign" />
                <input 
                    onChange={handleBillChange}
                    className={`${bill === '.' && 'error-input'}`}
                    value={bill}
                    type="text"
                    inputMode="decimal"
                    placeholder="0"
                    name="bill"
                    id="bill" 
                />
            </div>
        </div>
    )
}