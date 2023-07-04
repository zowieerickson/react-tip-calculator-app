export default function NumberOfPeople({ peopleCount, onStateChangePeopleCount, regexNumbersOnly }) {

    function handlePeopleCountChange(e) {
        if (e.target.value === "" || regexNumbersOnly.test(e.target.value)) {
            onStateChangePeopleCount(e.target.value)
        }
    }

    return (
        <div>
            <h3>Number of People</h3>
            <input 
                onChange={handlePeopleCountChange} 
                type="text"
                value={peopleCount}
                name="" 
                id="" 
            />
        </div>
    )
}

