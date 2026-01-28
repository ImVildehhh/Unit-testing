// Creating add function
function add(a, b) {
    return a + b;
}
// Creating subtract function
function subtract(a, b) {
    return a - b;
}
// Creating multiply function
function multiply(a, b) {
    return a * b;
}
// Creating divide function (if b equals 0, throw ZeroDivisionError)
function divide(a, b) {
    if (b === 0) {
        throw new Error("ZeroDivisionError: divisor can't be 0");
    }
    return a / b
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
}