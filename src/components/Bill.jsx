import '../styles/bill.css'

export default function Bill({ bill, onStateChangeBill, regexMoney }) {

    function handleBillChange(e) {
        if (e.target.value === "" || regexMoney.test(e.target.value)) {
            onStateChangeBill(e.target.value);
        }
    }

    return (
        <div>
            <h3>Bill</h3>
            <div className="bill-input">
                <svg className="icon-input icon-dollar-sign" />
                <input 
                    onChange={handleBillChange}
                    className={`${bill === '.' && 'error-input'}`}
                    value={bill}
                    type="text"
                    inputmode="numeric"
                    placeholder="0"
                    name=""
                    id="" 
                />
            </div>
        </div>
    )
}