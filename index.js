var firstValue = "";
var secondValue = "";
var sign = "";
var firstValueHave = false;
var secondValueHave = false;
var signHave = false;

function value(attribute) {
    if (firstValueHave == false && (attribute === '0' || attribute === '1' || attribute === '2' || attribute === '3' || attribute === '4' ||
        attribute === '5' || attribute === '6' || attribute === '7' || attribute === '8' || attribute === '9' || attribute === '.')) {

        if (firstValue.includes(".")) {
            if (attribute === '.') {
                attribute = "";
            }
        }
        firstValue = firstValue + attribute;

        if (firstValue.startsWith("0")) {
            firstValue = firstValue.replace("0", "");
        }

        if (firstValue.startsWith(".")) {
            firstValue = 0. + firstValue;
        }

        console.log(firstValue);
        document.getElementById("result").innerHTML = firstValue;


    }
    else if (signHave == false && (attribute === '+' || attribute === '-' || attribute === '*' || attribute === '/' || attribute === '=')) {

        if (attribute === '=') {
            firstValue = "";
            firstValueHave = false;
        }

        else {
            sign = attribute;
            firstValueHave = true;
            console.log(sign);
        }
    }

    else if (firstValueHave == true && secondValueHave == false && (attribute === '0' || attribute === '1' || attribute === '2' || attribute === '3' ||
        attribute === '4' || attribute === '5' || attribute === '6' || attribute === '7' || attribute === '8' || attribute === '9' || attribute === '.')) {

        if (secondValue.includes(".")) {
            if (attribute === '.') {
                attribute = "";
            }
        }

        secondValue = secondValue + attribute;

        if (secondValue.startsWith("0")) {
            secondValue = secondValue.replace("0", "");
        }

        if (secondValue.startsWith(".")) {
            secondValue = 0. + secondValue;
        }

        console.log(secondValue);
        document.getElementById("result").innerHTML = secondValue;
        signHave = true;
    }

    else if (firstValueHave == true && signHave == true && (attribute === '+' || attribute === '-' || attribute === '*' || attribute === '/' || attribute === '=')) {
        firstValue = +firstValue;
        secondValue = +secondValue;

        if (sign === '+') {
            var total = firstValue + secondValue;
            console.log(total);
            document.getElementById("result").innerHTML = total;
            sign = attribute;
            if (attribute === '=') {
                signHave = false;
            }
        }

        else if (sign === '-') {
            var total = firstValue - secondValue;
            console.log(total);
            document.getElementById("result").innerHTML = total;
            sign = attribute;
            if (attribute === '=') {
                signHave = false;
            }
        }

        else if (sign === '*') {
            var total = firstValue * secondValue;
            console.log(total);
            document.getElementById("result").innerHTML = total;
            sign = attribute;
            if (attribute === '=') {
                signHave = false;
            }
        }

        else if (sign === '/') {
            var total = firstValue / secondValue;
            console.log(total);
            document.getElementById("result").innerHTML = total;
            sign = attribute;
            if (attribute === '=') {
                signHave = false;
            }
        }
        firstValue = total;
        console.log(firstValue);
        secondValueHave = false;
        secondValue = "";
    }
}

function resetAll() {
    firstValue = "";
    secondValue = "";
    firstValueHave = false;
    secondValueHave = false;
    sign = "";
    signHave = false;
    total = "";
    document.getElementById("result").innerHTML = "0";
}
