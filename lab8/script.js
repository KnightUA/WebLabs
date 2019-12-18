window.onload = function () {
    let isDotEnabled = true;
    let isNumberEntered = true;
    let isOperation = false;

    let numberLength = 0;

    let view = document.getElementsByClassName("view")[0];
    let keyboardKeys = document.getElementsByClassName("keyboard-key");

    for (let i = 0; i < keyboardKeys.length; i++) {
        keyboardKeys[i].addEventListener('click', evt => {
            switch (keyboardKeys[i].innerHTML) {
                case "=":
                    view.innerText = eval(view.innerText);
                    break;
                case "C":
                    let str = view.innerText;
                    let newStr = str.substring(0, str.length - numberLength);
                    view.innerText = newStr;
                    break;
                case "AC":
                    numberLength = 0;
                    view.innerText = "";
                    break;
                case ".":
                    if (isDotEnabled && isNumberEntered) {
                        numberLength++;
                        view.innerText += keyboardKeys[i].innerHTML;
                        isDotEnabled = false;
                        isOperation = false;
                    }
                    break;
                case "-":
                case "+":
                case "*":
                case "/":
                    if (!isOperation) {
                        numberLength = 1;
                        view.innerText += keyboardKeys[i].innerHTML;

                        isDotEnabled = true;
                        isNumberEntered = false;
                        isOperation = true;
                    }
                    break;
                case "Bin":
                    view.innerText = eval(view.innerText).toString(2);
                    break;
                case "Dec":
                    view.innerText = eval(view.innerText).toString(10);
                    break;
                case "Hex":
                    view.innerText = eval(view.innerText).toString(16);
                    break;
                default:
                    numberLength++;
                    view.innerText += keyboardKeys[i].innerHTML;

                    isNumberEntered = true;
                    isOperation = false;
            }
        });
    }
};