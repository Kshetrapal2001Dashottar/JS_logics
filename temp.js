
function calculate() {
    let temp = prompt("Enter num1");
    let num1 = String(temp);
    console.log(num1);
    if (isNaN(num1 || num1.trim === (''))) {
        alert("Please re-enter Num1");
        return;
    }

    let temp2 = prompt("Enter num2");
    let num2 = String(temp2);

    if (isNaN(num2) || num2.trim('')) {
        alert("Please re-enter Num2");
        return;
    }

    let operator = prompt("Enter operator");
    result = '';
    switch (operator) {
        case '+':
            result = parseFloat(num1) + parseInt(num2);
            break;
        case '-':
            result = parseFloat(num1) - parseInt(num2);
            break;
        case '*':
            result = parseFloat(num1) * parseInt(num2);
            break;
        case '/':
            result = parseFloat(num1) / parseInt(num2);
            break;
        default:
            alert("invalid operator")

    }


    console.log(result);

}