function appendValue(value) {
    const resultField = document.getElementById('result');
    resultField.value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch {
        resultField.value = 'Error';
    }
}
