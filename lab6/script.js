function task1() {
    let input = prompt("Введіть текст:");
    alert(input.toLowerCase());
}

function task2() {
    let input = prompt("Введіть натуральне число зі степенем, у форматі a^n:").split('^');
    alert("Степінь даного числа:" + power(input[0], input[1]));
}

function power(number, n) {
    if (n === 0) {
        return 1
    } else if (n < 0) {
        return 1 / power(number, -n)
    } else {
        return number * power(number, n - 1)
    }
}

function task3() {
    let countOfTries = 0;
    let magicNumber = Math.floor(Math.random() * 10);

    while (true) {
        countOfTries++;

        let input = +prompt("Введіть число від 0 до 10:");
        if(input !== magicNumber) {
            if (input < magicNumber)
                alert("Більше");
            else
                alert("Менше");
        } else {
            break;
        }
    }

    alert("Вітаємо! Ви вгадали з " + countOfTries + " спроби!")
}