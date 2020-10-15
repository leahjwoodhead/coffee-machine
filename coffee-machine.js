
// Make Coffee Machine

function makeCoffeeMachine(beans, maxSize = 5){
    const coffeeMachine = {};

    coffeeMachine.beans = beans
    coffeeMachine.waterLevel = 0;
    coffeeMachine.maxSize = maxSize;
    coffeeMachine.addWater = addWater;
    coffeeMachine.makeCoffee = makeCoffee;

    return coffeeMachine;
}

function addWater() {
    if (this.waterLevel < this.maxSize) this.waterLevel++;
}

function makeCoffee(coffee) {
    if (this.waterLevel === 0) return "Please add water";
    else if (coffee === "Espresso") return `An Espresso made with ${this.beans}`
    else if (coffee != "Espresso" && this.waterLevel > 0) {
        this.waterLevel--;
        return `An Americano made with ${this.beans}`
    }
}

module.exports = makeCoffeeMachine;