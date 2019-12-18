function task1() {
    let entry = "";

    let isCorrect = false;
    do {
        entry = prompt("Введіть п'ятизначне число:");
        isCorrect = Number.isInteger(+entry)
    } while (entry.length !== 5 && !isCorrect);

    let firstVal = Number(entry[0]);
    let lastVal = Number(entry[4]);

    alert("Результат: " + firstVal % lastVal)
}

function task2() {

    let pointsX = [];
    let pointsY = [];
    let countOfPoints = 4;
    let square = 0;

    for (let i = 0; i < countOfPoints; i++) {
        while (true) {
            let entry = prompt("Введіть точку x" + (i + 1) + " та y" + (i + 1));
            let point = entry.split(" ");
            let isNumber = Number.isInteger(+point[0]) && Number.isInteger(+point[1]);

            if (isNumber) {
                pointsX.push(point[0]);
                pointsY.push(point[1]);
                break;
            }
        }
    }
    let firstPart = pointsX[0] * pointsY[1] + pointsX[1] * pointsY[2] + pointsX[2] * pointsY[3] + pointsX[3] * pointsY[0]
    let secondPart = pointsX[1] * pointsY[0] - pointsX[2] * pointsY[1] - pointsX[3] * pointsY[2] - pointsX[0] * pointsY[3]
    square = Math.abs(firstPart - secondPart) / 2;

    alert("Площа чотирикунтника: " + square)
}

function task3() {
    let number = prompt("Введіть число");
    let currentSimpleNumber = 2;
    let indexOfSimple = 0;
    const simpleNumbers = [];
    let result = number + " = ";
    while (currentSimpleNumber <= number) {
        while (number % currentSimpleNumber === 0) {
            number = number / currentSimpleNumber;
            simpleNumbers[indexOfSimple] = currentSimpleNumber;
            indexOfSimple++;
            if (number === 1) {
                break;
            }
        }
        currentSimpleNumber++;
    }
    for (let i = 0; i < simpleNumbers.length; i++) {
        result += simpleNumbers[i];

        if (i !== simpleNumbers.length - 1) {
            result += " * ";
        }
    }

    alert(result)
}

function task4() {
    let numberA = +prompt("Введіть перше число:");
    let numberB = +prompt("Введіть друге число:");

    let a = numberA;
    let b = numberB;
    let c, v;

    let result = 0;

    if (numberA > numberB) {
        c = numberA;
        v = numberB;
    } else {
        c = numberB;
        v = numberA;
    }

    if ((2 * a) === b) {
        result = b;
        return alert("НСК " + numberA + " і " + numberB + " = " + result);
    } else if ((2 * b) === a) {
        result = a;
        return alert("НСК " + numberA + " і " + numberB + " = " + result);
    } else {
        while (a !== 0 && b !== 0) {
            if (a > b)
                a %= b;
            else
                b %= a;
        }
    }

    c /= (a + b);
    result = c * v;
    return alert("НСК " + numberA + " і " + numberB + " = " + result);
}