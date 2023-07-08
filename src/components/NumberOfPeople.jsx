import '../styles/number-of-people.css'

export default function NumberOfPeople({ peopleCount, onStateChangePeopleCount, regexNumbersOnly }) {

    function handlePeopleCountChange(e) {
        if (e.target.value === "" || regexNumbersOnly.test(e.target.value)) {
            onStateChangePeopleCount(e.target.value)
        }
    }

    return (
        <div>
            <label htmlFor="number-of-people" >Number of People {peopleCount === '0' && <span className="error-text">Can't be zero</span>}</label>
            
            <div className={`people-input`}>
                <svg className="icon-input icon-person" />
                <input 
                    onChange={handlePeopleCountChange}
                    className={peopleCount === '0' ? "error-input error-border" : ''}
                    type="text"
                    inputMode="numeric"
                    value={peopleCount}
                    placeholder="1"
                    name="number-of-people" 
                    id="number-of-people" 
                />
            </div>
        </div>
    )
}

