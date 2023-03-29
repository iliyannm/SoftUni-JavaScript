const { expect } = require("chai");
const { findNewApartment } = require('./findApartment');

describe("Tests", () => {
    describe("isGoodLocation", () => {
        it("invalid input", () => {
            expect(() => findNewApartment.isGoodLocation(1, true)).to.throw();
            expect(() => findNewApartment.isGoodLocation('Plovdiv', 1)).to.throw();
            expect(() => findNewApartment.isGoodLocation(1, 1)).to.throw();
        });
        it("home tour", () => {
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!');
        });
        it("no public transport", () => {
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Varna', false)).to.equal('There is no public transport in area.');
        });
        it("no suitable", () => {
            expect(findNewApartment.isGoodLocation('Ruse', false)).to.equal('This location is not suitable for you.');
            expect(findNewApartment.isGoodLocation('Burgas', false)).to.equal('This location is not suitable for you.');
            expect(findNewApartment.isGoodLocation('Veliko Tarnovo', false)).to.equal('This location is not suitable for you.');
            expect(findNewApartment.isGoodLocation('Ruse', true)).to.equal('This location is not suitable for you.');
            expect(findNewApartment.isGoodLocation('Burgas', true)).to.equal('This location is not suitable for you.');
            expect(findNewApartment.isGoodLocation('Veliko Tarnovo', true)).to.equal('This location is not suitable for you.');
        });
     });
     describe("isLargeEnough", () => {
        it("invalid input", () => {
            expect(() => findNewApartment.isLargeEnough(1, 1)).to.throw();
            expect(() => findNewApartment.isLargeEnough([], 1)).to.throw();
            expect(() => findNewApartment.isLargeEnough([1], true)).to.throw();
            expect(() => findNewApartment.isLargeEnough(true, true)).to.throw();
        });
        it("invalid input", () => {
            expect(findNewApartment.isLargeEnough([2, 3, 4], 1)).to.equal('2, 3, 4');
            expect(findNewApartment.isLargeEnough([1, 2, 3, 4], 1)).to.equal('1, 2, 3, 4');
            expect(findNewApartment.isLargeEnough([2, 3, 4], 4)).to.equal('4');
        });
     });
     describe("isAffordable", () => {
        it("invalid input", () => {
            expect(() => findNewApartment.isItAffordable(true, 1)).to.throw();
            expect(() => findNewApartment.isItAffordable(1, true)).to.throw();
            expect(() => findNewApartment.isItAffordable(0, 1)).to.throw();
            expect(() => findNewApartment.isItAffordable(1, 0)).to.throw();
        });
        it("no money", () => {
            expect(findNewApartment.isItAffordable(2, 1)).to.equal("You don't have enough money for this house!");
            expect(findNewApartment.isItAffordable(3, 2)).to.equal("You don't have enough money for this house!");
            expect(findNewApartment.isItAffordable(4, 3)).to.equal("You don't have enough money for this house!");
        });
        it("buy it", () => {
            expect(findNewApartment.isItAffordable(1, 2)).to.equal("You can afford this home!");
            expect(findNewApartment.isItAffordable(2, 3)).to.equal("You can afford this home!");
            expect(findNewApartment.isItAffordable(3, 4)).to.equal("You can afford this home!");
            expect(findNewApartment.isItAffordable(4, 4)).to.equal("You can afford this home!");
        });
     });
});