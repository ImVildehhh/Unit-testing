const { expect } = require('chai');
const mylib = require("../scripts/mylib");

describe("mylib Arithmetic Operations", function () {

    before(function () {
        console.log("Starting tests...")
    });

    after(function () {
        console.log("Tests finished.")
    })

    describe("add()", () => {
        it("should add two numbers correctly", () => {
            expect(mylib.add(2, 3)).to.equal(5);
        })
    })
    describe("subtract()", () => {
        it("should substract two numbers correctly", () => {
            expect(mylib.subtract(5, 3)).to.equal(2);
        })
    })
    describe("multiply", () => {
        it("should multiply two numbers correctly", () => {
            expect(mylib.multiply(5, 3)).to.equal(15);
        })
    })
    describe("divide()", () => {
        it("should divide two numbers correctly", () => {
            expect(mylib.divide(10, 5)).to.equal(2);
    })
    
        it("should throw an error when dividing by zero", () => {
            expect(() => mylib.divide(10, 0)).to.throw("ZeroDivisionError");
    })
})
})