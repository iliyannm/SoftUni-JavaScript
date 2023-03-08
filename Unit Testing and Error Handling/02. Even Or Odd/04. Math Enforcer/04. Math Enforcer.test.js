const {mathEnforcer} = require('./04. Math Enforcer');
const {expect} = require('chai');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return undefined when the parameter is not a number', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
        })
        it('should return correct answer with positive integer', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        })
        it('should return correct answer with negative integer', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        })
        it('should return correct answer with floating number', () => {
            expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
        })
    })
    describe('subtractTen', () => {
        it('should return undefined when the parameter is not a number', () => {
            expect(mathEnforcer.subtractTen('10')).to.be.undefined;
        })
        it('should return correct answer with positive integer', () => {
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
        })
        it('should return correct answer with negative integer', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        })
        it('should return correct answer with floating number', () => {
            expect(mathEnforcer.subtractTen(12.5)).to.be.closeTo(2.5, 0.01);
        })
    })
    describe('sum', () => {
        it('should return undefined when the first parameter is not a number', () => {
            expect(mathEnforcer.sum('10', 5)).to.be.undefined;
        })
        it('should return undefined when the second parameter is not a number', () => {
            expect(mathEnforcer.sum(10, '5')).to.be.undefined;
        })
        it('should return undefined when both of the parameters are not numbers', () => {
            expect(mathEnforcer.sum('10', '5')).to.be.undefined;
        })
        it('should return correct answer when both of the parameters are numbers', () => {
            expect(mathEnforcer.sum(10, 5)).to.equal(15);
        })
        it('should return correct answer when first paramater is integer and second is floating number', () => {
            expect(mathEnforcer.sum(10, 5.2)).to.be.closeTo(15.2, 0.01);
        })
        it('should return correct answer when second paramater is integer and first is floating number', () => {
            expect(mathEnforcer.sum(5.2, 10)).to.be.closeTo(15.2, 0.01);
        })
        it('should return correct answer when both of the parameters are floating numbers', () => {
            expect(mathEnforcer.sum(9.5, 5.7)).to.be.closeTo(15.2, 0.01)
        })
    })
});