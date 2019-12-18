class Ingredient {

    constructor(name, price, textElement) {
        this.name = name;
        this.textElement = textElement;
        this.price = price;
        this.count = 0;
    }

    get generalPrice() {
        return this.count * this.price;
    }

    plus() {
        this.count++;
    }

    minus() {
        this.count--;
        if (this.count < 0) {
            this.count = 0;
        }
    }

    change() {
        this.textElement.innerHTML = this.count
    }
}

window.onload = function() {
    let tomato = new Ingredient("Tomato", 4, document.getElementById("count-tomato"));

    document.getElementById("minus-tomato").onclick = function () {
        tomato.minus();
        tomato.change();
        generalPriceChange();
    };

    document.getElementById("plus-tomato").onclick = function () {
        tomato.plus();
        tomato.change();
        generalPriceChange();
    };

    let cheese = new Ingredient("Cheese", 3, document.getElementById("count-cheese"));

    document.getElementById("minus-cheese").onclick = function () {
        cheese.minus();
        cheese.change();
        generalPriceChange();
    };

    document.getElementById("plus-cheese").onclick = function () {
        cheese.plus();
        cheese.change();
        generalPriceChange();
    };

    let salami = new Ingredient("Salami", 5, document.getElementById("count-salami"));

    document.getElementById("minus-salami").onclick = function () {
        salami.minus();
        salami.change();
        generalPriceChange();
    };

    document.getElementById("plus-salami").onclick = function () {
        salami.plus();
        salami.change();
        generalPriceChange();
    };

    function generalPriceChange() {
        let generalPrice = salami.generalPrice + cheese.generalPrice + tomato.generalPrice;
        let str = "Загалом: " + generalPrice + " грн.";
        document.getElementById("general-price").innerHTML = str;
    }
};