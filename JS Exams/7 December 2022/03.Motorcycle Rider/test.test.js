const { expect } = require("chai");
const { motorcycleRider } = require('./motorcycleRider');

describe("Tests", () => {
    describe("licenseRestriction", () => {
        it('happy path', () => {
            expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
            expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
            expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
            expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.');
        });
        it('invalid input', () => {
            expect(() => motorcycleRider.licenseRestriction('1')).to.throw();
            expect(() => motorcycleRider.licenseRestriction(1)).to.throw();
            expect(() => motorcycleRider.licenseRestriction()).to.throw();
        });
    });
    describe("motorcycleShowroom", () => {
        it('happy path', () => {
            expect(motorcycleRider.motorcycleShowroom([80, 90], 70)).to.equal('There are 0 available motorcycles matching your criteria!');
            expect(motorcycleRider.motorcycleShowroom([50, 60, 70], 70)).to.equal('There are 3 available motorcycles matching your criteria!');
            expect(motorcycleRider.motorcycleShowroom([50, 60], 50)).to.equal('There are 1 available motorcycles matching your criteria!');
        });
        it('invalid input', () => {
            expect(() => motorcycleRider.motorcycleShowroom('1', 70)).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom([], 70)).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom([10, 20], '30')).to.throw();
            expect(() => motorcycleRider.motorcycleShowroom([10, 20], 30)).to.throw();
        });
    });
    describe("otherSpendings", () => {
        it('happy path', () => {
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], false)).to.equal('You spend $600.00 for equipment and consumables!');
            expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil', 'oil filter'], false)).to.equal('You spend $300.00 for equipment and consumables!');
            expect(motorcycleRider.otherSpendings(['jacked'], ['engine oil', 'oil filter'], false)).to.equal('You spend $400.00 for equipment and consumables!');
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['oil filter'], false)).to.equal('You spend $530.00 for equipment and consumables!');
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil'], false)).to.equal('You spend $570.00 for equipment and consumables!');
            expect(motorcycleRider.otherSpendings([], [], false)).to.equal('You spend $0.00 for equipment and consumables!');
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], true)).to.equal('You spend $540.00 for equipment and consumables with 10% discount!');
            expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil', 'oil filter'], true)).to.equal('You spend $270.00 for equipment and consumables with 10% discount!');
            expect(motorcycleRider.otherSpendings(['jacked'], ['engine oil', 'oil filter'], true)).to.equal('You spend $360.00 for equipment and consumables with 10% discount!');
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['oil filter'], true)).to.equal('You spend $477.00 for equipment and consumables with 10% discount!');
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil'], true)).to.equal('You spend $513.00 for equipment and consumables with 10% discount!');
        });
        it('invalid input', () => {
            expect(() => motorcycleRider.otherSpendings('1', [], true)).to.throw();
            expect(() => motorcycleRider.otherSpendings([], 1, true)).to.throw();
            expect(() => motorcycleRider.otherSpendings([], [], '30')).to.throw();
        });
    });
});