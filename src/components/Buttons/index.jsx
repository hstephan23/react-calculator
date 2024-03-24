function Buttons() {
    const numbers = ["AC", "+/-", "%", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "="];
    const name = ["AC", "plusminus", "percent", "divide", "seven", "eight", "nine", "multiply", "four", "five",
    "six", "minus", "one", "two", "three", "plus", "zero", "decimal", "equal"];
    let type = "";
    let savedValue;
    let total;

    const handleInput = (e, number) => {
        e.preventDefault();
        const display = document.getElementById("display");
        const displayAsInt = parseInt(display.textContent);

        if (Number.isInteger(number)) {
            if (display.textContent === "0") {
                display.textContent = number;
            } else {
                display.append(number);
            }
        } else if (number === ".") {
            display.append(number);
        } else if (number === "AC") {
            display.textContent = "0";
        } else if (number === "+/-") {
            if (Math.sign(displayAsInt) === 1) {
                const negative = displayAsInt * -1;
                display.textContent = negative;
            } else if (Math.sign(displayAsInt) === -1) {
                const positive = displayAsInt * -1;
                display.textContent = positive;
            }
        } else if (number === "%") {
            if (displayAsInt !== 0) {
                const percentage = displayAsInt / 100;
                display.textContent = percentage;
            }
        } else if (number === "/") {
            savedValue = displayAsInt;
            type = "division";
            display.textContent = 0;
        } else if (number === "*") {
            savedValue = displayAsInt;
            type = "multiplication";
            display.textContent = 0;
        } else if (number === "+") {
            savedValue = displayAsInt;
            type = "addition";
            display.textContent = 0;
        } else if (number === "-") {
            savedValue = displayAsInt;
            type = "subtraction";
            display.textContent = 0;
        } else if (number === "=") {
            if (type === "multiplication") {
                total = savedValue * displayAsInt;
                display.textContent = total;
            } else if (type === "division") {
                total = savedValue / displayAsInt;
                display.textContent = total;
            } else if (type === "subtraction") {
                total = savedValue - displayAsInt;
                display.textContent = total;
            } else if (type === "addition") {
                total = savedValue + displayAsInt;
                display.textContent = total;
            }
        }
    }

    return (
        <>
            <form>
                <div id="buttons">
                    {
                        numbers.map((number, index) => (
                            <button key={number} value={number} className={name[index]} onClick={() => handleInput(event, number)}>{number}</button>
                        ))
                    }
                </div>
            </form>
        </>
    );

};

export default Buttons;