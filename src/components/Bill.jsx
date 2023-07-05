export default function Bill({ bill, onStateChangeBill, regexNumbersOnly }) {

    function handleBillChange(e) {
        if (e.target.value === "" || regexNumbersOnly.test(e.target.value)) {
            onStateChangeBill(e.target.value);
        }
    }

    return (
        <div>
            <h3>Bill</h3>
            <input 
                onChange={handleBillChange}
                value={bill}
                type="text"
                placeholder="0"
                name=""
                id="" 
            />
        </div>
    )
}