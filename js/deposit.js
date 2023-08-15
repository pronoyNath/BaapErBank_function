document.getElementById('btn-deposit').addEventListener('click', function () {
    let inputDepositValue = inputFieldValueId('user-deposit');
    let prevDepositValue = textFieldValueId('depTk');
    let prevTotalBalance = textFieldValueId('balance');

    if (inputDepositValue>0 && !isNaN(inputDepositValue)) {
        let newTotalDeposit = prevDepositValue + inputDepositValue;
        setValueToTextElement('depTk', newTotalDeposit);
        
        let newTotalBalance = prevTotalBalance + inputDepositValue;
        setValueToTextElement('balance',newTotalBalance);
    }
    else {
        alert("Enter a valid Number");
    }
})