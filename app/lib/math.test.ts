import { add, subtract, divide } from "./math"


describe("Math Utility Function", () => {


    describe("add function", () => {

        it("Add two positive numbers", () => {
            expect(add(2, 3)).toBe(5)
        })

        it("Add two negative numbers", () => {
            expect(add(-5, -5)).toBe(-10)
        })


    })


    describe("Subtract Function ", () => {

        it("Subtracting two postive numbers", () => {
            expect(subtract(4, 5)).toBe(-1)
        })

        it("subtracting two negative numbers", () => {
            expect(subtract(-1, -2)).toBe(1)
        })

    })


    describe("divide()", () => {
        it("divides two numbers", () => {
            expect(divide(10, 2)).toBe(5)
        })

        it("throws error when dividing by zero", () => {
            expect(() => divide(10, 0)).toThrow("Division by zero")
        })
    })

})