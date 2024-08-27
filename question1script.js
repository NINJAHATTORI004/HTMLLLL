function calculateFactorial() {
    const number = document.getElementById('numberInput').value;
    let result = 1;

    if (number < 0) {
        result = 'Please enter a non-negative number.';
    } else {
        for (let i = 1; i <= number; i++) {
            result *= i;
        }
    }

    document.getElementById('niet').innerText = `Factorial: ${result}`;
}