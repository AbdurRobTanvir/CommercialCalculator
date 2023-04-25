var firstValue = "";
var secondValue = "";
var sign = "";
var hasFirstValue = false;
var hasSecondValue = false;
var hasSign = false;
var valueAfterEqual = false;

function operator(attribute) {
    if (hasSign == false) {
        if (attribute === '=') {
            firstValue = "";
        }

        else {
            sign = attribute;
            hasFirstValue = true;
            hasSign = true;
            valueAfterEqual = false;
        }
    }

    else if (hasFirstValue == true && hasSign == true) {
        firstValue = +firstValue;
        secondValue = +secondValue;

        if (sign === '+') {
            var total = firstValue + secondValue;
        }

        if (sign === '-') {
            var total = firstValue - secondValue;
        }

        if (sign === '*') {
            var total = firstValue * secondValue;
        }

        if (sign === '/') {
            var total = firstValue / secondValue;
        }

        if (attribute === '=') {
            hasSign = false;
            valueAfterEqual = true;
        }

        document.getElementById("result").innerHTML = total;
        sign = attribute;
        firstValue = total;
        hasSecondValue = false;
        secondValue = "";
    }
}

function value(attribute) {
    if ((hasFirstValue == false && hasSign == false) || valueAfterEqual == true) {

        if (valueAfterEqual == true) {
            firstValue = "";
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
        if (firstValue.includes(".")) {
            if (attribute === '.') {
                attribute = "";
            }
        }
        document.getElementById("result").innerHTML = firstValue;
    }

    else if (hasSecondValue == false && hasSign == true) {

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
    hasFirstValue = false;
    hasSecondValue = false;
    sign = "";
    hasSign = false;
    total = "";
    document.getElementById("result").innerHTML = "0";
}