function inputFieldValueId(inputFieldId){
    let inputField = document.getElementById(inputFieldId);
    let inputFieldValueString = inputField.value;
    let inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function textFieldValueId(textFieldId){
    let textField = document.getElementById(textFieldId);
    let textFieldValueString = textField.innerText;
    let textFieldValue = parseFloat(textFieldValueString);
    return textFieldValue;
}

function setValueToTextElement(IDtoSetValue,newValue){
    let toBeSavedID = document.getElementById(IDtoSetValue);
    toBeSavedID.innerText = newValue;
}