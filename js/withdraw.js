document.getElementById('btn-withdraw').addEventListener('click',function(){
    let inputWithdrawValue = inputFieldValueId('user-withdraw');
    let prevWithdrawValue = textFieldValueId('withdraw-Tk');
    let prevTotalBalance = textFieldValueId('balance');
    
    if (inputWithdrawValue>0 && !isNaN(inputWithdrawValue)) {
        if(inputWithdrawValue > prevTotalBalance){
            alert("Baap er eto taka nai\nja vag....");
            return;
        }
        let newTotalWithdraw = prevWithdrawValue + inputWithdrawValue;
        setValueToTextElement('withdraw-Tk', newTotalWithdraw);
        
        let newTotalBalance = prevTotalBalance - inputWithdrawValue;
        setValueToTextElement('balance',newTotalBalance);
    }
    else {
        alert("Enter a valid Number");
    }
})