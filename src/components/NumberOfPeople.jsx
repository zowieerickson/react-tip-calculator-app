import '../styles/number-of-people.css'

export default function NumberOfPeople({ peopleCount, onStateChangePeopleCount, regexNumbersOnly }) {

    function handlePeopleCountChange(e) {
        if (e.target.value === "" || regexNumbersOnly.test(e.target.value)) {
            onStateChangePeopleCount(e.target.value)
        }
    }

    return (
        <section>
            <h2 className="visuallyhidden">Number of People</h2>
            <label htmlFor="number-of-people" >Number of People {peopleCount === '0' && <span className="error-text">Can't be zero</span>}</label>
            
            <div className={`people-input`}>
                <svg aria-hidden="true" className="icon-input icon-person" />
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
        </section>
    )
}

