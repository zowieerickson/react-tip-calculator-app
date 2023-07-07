import '../styles/number-of-people.css'

export default function NumberOfPeople({ peopleCount, onStateChangePeopleCount, regexNumbersOnly }) {

    function handlePeopleCountChange(e) {
        if (e.target.value === "" || regexNumbersOnly.test(e.target.value)) {
            onStateChangePeopleCount(e.target.value)
        }
    }

    return (
        <div>
            <h3>Number of People {peopleCount === '0' && <span className="error-text">Can't be zero</span>}</h3>
            
            <div className={`people-input ${peopleCount === '0' && "error-border"}`}>
                <svg className="icon-input icon-person" />
                <input 
                    onChange={handlePeopleCountChange}
                    className={peopleCount === '0' ? "error-input" : ''}
                    type="text"
                    value={peopleCount}
                    placeholder="1"
                    name="" 
                    id="" 
                />
            </div>
        </div>
    )
}

