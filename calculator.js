// ===============================

// JAVASCRIPT CALCULATOR

// ===============================

// This array stores the history of all calculations
let history = [];

// ADDITION
function add (a, b) {
    const result = a + b;
    history.push(`${a} + ${b} = ${result}`);
    return result;
}

// SUBTRACTION
function subtract (a, b) {
    const result = a - b;
    history.push(`${a} - ${b} = ${result}`);
    return result;
}

//MULTIPLICATION
function multiply (a, b) {
    const resut = a * b;
    history.push(`${a} * ${b} = ${resut}`);
    return resut;
}

// DIVISION
function divide (a, b) {
    if (b === 0) {
        history.push(`Error: Syntax error ${a} by 0`);
        return "Error: Syntax error";
    }
        
        const result = a / b;
        history.push(`${a} / ${b} = ${result}`);
        return result;
}

// SQUARE ROOT
function squareRoot(a) {
    if (a < 0) {
        history.push(`Error: Syntax Error`);
        return "Error: Syntax Error";
    }

    const result = Math.sqrt(a);
    history.push(`√${a} = ${result}`);
    return result;
}

// POWER FUNCTION
function power(a, b) {
    const result = Math.pow(a, b); // a raised to the power b
    history.push(`${a} ^ ${b} = ${result}`);
    return result;
}

// CLEAR HISTORY
function clearHistory() {
    history = []; // reset the history array to empty
    console.log("History has been cleared!");
}

// SHOW LAST RESULT
function lastResult() {
    if (history.length === 0) {
        console.log("No calculations yet!");
        return null;
    }
    console.log("Last calculation:", history[history.length - 1]);
    return history[history.length - 1];
}




// SHOW HISTORY
function showHistory() {
    console.log("=== CALCULATION HISTORY ===");
    history.forEach(item => console.log(item));
}

// demo
add(7, 8);
subtract(6, 4);
multiply(8, 6);
divide(14, 2);
divide(10, 0);
squareRoot(25)
squareRoot(-9)
power(2, 3);   
power(5, 0);   
power(7, 2);   
add(10, 5);
multiply(3, 7);
lastResult(); // should print "3 * 7 = 21"

clearHistory(); 
showHistory(); // should show empty



// print history to console
showHistory();

