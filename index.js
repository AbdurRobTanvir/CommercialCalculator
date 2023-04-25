var firstValue = "";
var secondValue = "";
var sign = "";
var firstValueHave = false;
var secondValueHave = false;
var signHave = false;


function operator(attribute) {
    if (signHave == false) {
        if (attribute === '=') {
            firstValue = "";
        }

        else {
            sign = attribute;
            firstValueHave = true;
            signHave = true;
        }
    }
    
    else if (firstValueHave == true && signHave == true) {
        firstValue = +firstValue;
        secondValue = +secondValue;

        if (sign === '+') {
            var total = firstValue + secondValue;
        }

        else if (sign === '-') {
            var total = firstValue - secondValue;
        }

        else if (sign === '*') {
            var total = firstValue * secondValue;
        }

        else if (sign === '/') {
            var total = firstValue / secondValue;
        }

        if (attribute === '=') {
            signHave = false;
        }
        document.getElementById("result").innerHTML = total;
        sign = attribute;
        firstValue = total;
        secondValueHave = false;
        secondValue = "";
    }
}

function value(attribute) {
    if (firstValueHave == false && signHave == false) {

        if (firstValue.includes(".")) {
            if (attribute === '.') {
                attribute = "";
            }
        }
        firstValue = firstValue + attribute;

        if (firstValue.startsWith("0")) {
            firstValue = firstValue.replace("0", "");
            if (firstValue === "") {
                firstValue = "0";
            }
        }

        if (firstValue.startsWith(".")) {
            firstValue = 0. + firstValue;
        }

        document.getElementById("result").innerHTML = firstValue;

    }
    else if (secondValueHave == false && signHave == true) {

        if (secondValue.includes(".")) {
            if (attribute === '.') {
                attribute = "";
            }
        }

        secondValue = secondValue + attribute;

        if (secondValue.startsWith("0")) {
            secondValue = secondValue.replace("0", "");
            if (secondValue === "") {
                secondValue = "0";
            }
        }

        if (secondValue.startsWith(".")) {
            secondValue = 0. + secondValue;
        }

        document.getElementById("result").innerHTML = secondValue;
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