const { TestScheduler } = require("jest")
const makeCoffeeMachine = require("./coffee-machine");


describe("makeCoffeeMachine", () => {
    test("makeCoffeeMachine should return an object", () => {
        expect(typeof makeCoffeeMachine()).toBe("object");
    })
    test("makeCoffeeMachine creates a beans property equal to argument passed through", () =>{
        const testCoffee = makeCoffeeMachine("Java Lava");
        expect(testCoffee.beans).toBe("Java Lava");
    })
    test("makeCoffeeMachine has a water level property initially set to 0", () => {
        const testCoffee = makeCoffeeMachine("Java Lava");
        expect(testCoffee.waterLevel).toBe(0);
    })
    test("makeCoffeeMachine has a max size which defaults to 5", () => {
        const testCoffee = makeCoffeeMachine("Java Lava");
        expect(testCoffee.maxSize).toBe(5);
    })
    test("makeCoffeeMachine max size property can be passed as an argument", () => {
        const testCoffee = makeCoffeeMachine("Java Lava", 3);
        expect(testCoffee.maxSize).toBe(3);
    })
    test("makeCoffeeMachine has an addWater method which increases by 1 each time its called", () => {
        const testCoffee = makeCoffeeMachine("Java Lava", 3);
        testCoffee.addWater()
        testCoffee.addWater()
        testCoffee.addWater()
        expect(testCoffee.waterLevel).toBe(3);
    })
    test("makeCoffeeMachine addWater method does not increase water level if maxSize is exceeded", () => {
        const testCoffee = makeCoffeeMachine("Java Lava", 3);
        testCoffee.addWater()
        testCoffee.addWater()
        testCoffee.addWater()
        testCoffee.addWater()
        testCoffee.addWater()
        expect(testCoffee.waterLevel).toBe(3);
    })
    test("makeCoffee method returns 'please add water' if waterLevel is 0", () => {
        const testCoffee = makeCoffeeMachine("Java Lava", 3);
        expect(testCoffee.makeCoffee()).toBe("Please add water");
    })
    test("makeCoffee method returns an espresso made with passed beans if invoked with 'Espresso", () => {
        const testCoffee = makeCoffeeMachine("Java Lava", 3);
        testCoffee.addWater();
        expect(testCoffee.makeCoffee("Espresso")).toBe("An Espresso made with Java Lava");
    })
    test("makeCoffee method returns an Americano made with passed beans if any other coffee is passed and reduces water by one", () => {
        const testCoffee = makeCoffeeMachine("Java Lava", 3);
        testCoffee.addWater();
        expect(testCoffee.makeCoffee()).toBe("An Americano made with Java Lava");
        expect(testCoffee.waterLevel).toBe(0);
    })
})