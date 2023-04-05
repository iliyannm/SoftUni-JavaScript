const { expect } = require("chai");
const { weddingDay } = require('./weddingDay');

describe("Tests", () => {
    describe("pickVenue", () => {
        it("Happy cases - location Varna", () => {
            expect(weddingDay.pickVenue(160, 100, 'Varna', )).to.equal('This venue meets the requirements, with capacity of 160 guests and 100$ cover.');
            expect(weddingDay.pickVenue(150, 120, 'Varna', )).to.equal('This venue meets the requirements, with capacity of 150 guests and 120$ cover.');
            expect(weddingDay.pickVenue(150, 130, 'Varna', )).to.equal('This venue does not meet your requirements!');
            expect(weddingDay.pickVenue(140, 130, 'Varna', )).to.equal('This venue does not meet your requirements!');
            expect(weddingDay.pickVenue(140, 120, 'Varna', )).to.equal('This venue does not meet your requirements!');
            expect(weddingDay.pickVenue(140, 110, 'Varna', )).to.equal('This venue does not meet your requirements!');
        });
        it("other locations", () => {
            expect(() => weddingDay.pickVenue(160, 120, 'Priseltsi')).to.throw();
            expect(() => weddingDay.pickVenue(160, 120, 'Golden sands')).to.throw();
            expect(() => weddingDay.pickVenue(160, 120, 'Asparuhovo')).to.throw();
        });
        it("invalid input", () => {
            expect(() => weddingDay.pickVenue('160', 120, 'Varna')).to.throw();
            expect(() => weddingDay.pickVenue(160, '120', 'Golden sands')).to.throw();
            expect(() => weddingDay.pickVenue(160, 120, ['Varna'])).to.throw();
            expect(() => weddingDay.pickVenue(160, 120, '')).to.throw();
        });
     });
     describe("otherSpendings", () => {
        it("Happy cases - wedding decoration with no discount", () => {
            expect(weddingDay.otherSpendings(['flowers'], [], false)).to.equal('You spend 500$ for wedding decoration and photography!');
            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], [], false)).to.equal('You spend 900$ for wedding decoration and photography!');
            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures'], false)).to.equal('You spend 1600$ for wedding decoration and photography!');
            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], false)).to.equal('You spend 2900$ for wedding decoration and photography!');
        });
        it("Happy cases - wedding decoration with discount", () => {
            expect(weddingDay.otherSpendings(['flowers'], [], true)).to.equal('You spend 425$ for wedding decoration and photography with 15% discount!');
            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], [], true)).to.equal('You spend 765$ for wedding decoration and photography with 15% discount!');
            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures'], true)).to.equal('You spend 1360$ for wedding decoration and photography with 15% discount!');
            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], true)).to.equal('You spend 2465$ for wedding decoration and photography with 15% discount!');
        });
        it("invalid input", () => {
            expect(() => weddingDay.otherSpendings('flowers', ['pictures'], true)).to.throw();
            expect(() => weddingDay.otherSpendings(['flowers'], 'pictures', false)).to.throw();
            expect(() => weddingDay.otherSpendings(['flowers'], ['pictures'], 'true')).to.throw();
        });
     });
     describe("tableDistribution", () => {
        it("Happy cases", () => {
            expect(weddingDay.tableDistribution(50, 10)).to.equal('There is only 5 people on every table, you can join some tables.');
            expect(weddingDay.tableDistribution(45, 10)).to.equal('There is only 5 people on every table, you can join some tables.');
            expect(weddingDay.tableDistribution(54, 10)).to.equal('There is only 5 people on every table, you can join some tables.');
            expect(weddingDay.tableDistribution(57, 10)).to.equal('You have 10 tables with 6 guests on table.');
            expect(weddingDay.tableDistribution(55, 10)).to.equal('You have 10 tables with 6 guests on table.');
        });
        it("invalid input", () => {
            expect(() => weddingDay.otherSpendings('5', 1)).to.throw();
            expect(() => weddingDay.otherSpendings(-5, 1)).to.throw();
            expect(() => weddingDay.otherSpendings(5, -1)).to.throw();
            expect(() => weddingDay.otherSpendings(5, '1')).to.throw();
        });
     });
});