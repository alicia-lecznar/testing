let {
    ChangeHandler
} = require("../src/changehandler");

describe("ChangeHandler", function () {
    describe("constructor", function () {

        // Set up a test below...
        test("5.a. amountDue is set based on an argument", function () {
            // Remember, you can arrange, act, and assert...start small
            let changeHandler = new ChangeHandler(105);
            //assert
            expect(changeHandler.amountDue).toBe(105);

        });
        test("5.b. cashTendered is set to zero", function () {
            let changeHandler = new ChangeHandler(54); //54 is amount due (random)
            expect(changeHandler.cashTendered).toBe(0);
        })

    })

    describe("insertCoin", function () {
        test("6.a. Inserting a quarter adds 25.", function () {
            let changeHandler = new ChangeHandler(); //changeHandler =object ChangeHandler=class
            changeHandler.insertCoin("quarter")
            expect(changeHandler.cashTendered).toBe(25);
        })
        test("6.b. Inserting a dime adds 10.", function () {
            let changeHandler = new ChangeHandler(); //changeHandler =object ChangeHandler=class
            changeHandler.insertCoin("dime")
            expect(changeHandler.cashTendered).toBe(10);
        })

        test("6.c. Inserting a nickel adds 5.", function () {
            let changeHandler = new ChangeHandler(); //changeHandler =object ChangeHandler=class
            changeHandler.insertCoin("nickel")
            expect(changeHandler.cashTendered).toBe(5);
        })

        test("6.d. Inserting a penny adds 1.", function () {
            let changeHandler = new ChangeHandler(); //changeHandler =object ChangeHandler=class
            changeHandler.insertCoin("penny")
            expect(changeHandler.cashTendered).toBe(1);
        })
        test("6.e. Calling function multiple times adds to amount.", function () {
            let changeHandler = new ChangeHandler(); //changeHandler =object ChangeHandler=class
            changeHandler.insertCoin("penny")
            changeHandler.insertCoin("quarter")
            expect(changeHandler.cashTendered).toBe(26);
        })
    })

    test("7.a Returns true if cash tendered more than the amount",function(){
        let changeHandler = new ChangeHandler(5);
        changeHandler.insertCoin('quarter');
        expect(changeHandler.isPaymentSufficient()).toBe(true);

    }

    
})
