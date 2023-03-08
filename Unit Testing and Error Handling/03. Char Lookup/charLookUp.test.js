const {lookupChar} = require('./charLookUp');
const {expect} = require('chai');

describe('Test Suite', () => {
    it('We pass string but invalid index', () => {
        expect(lookupChar('text', '1')).to.be.undefined;
    });

    it('We pass valid index but invalid string', () => {
        expect(lookupChar(1, 1)).to.be.undefined;
    });

    it('We pass string with length fewer than the index', () => {
        expect(lookupChar('tex', 10)).to.be.equal('Incorrect index', 'Wrong suggestion');
    });

    it('We pass invalid index', () => {
        expect(lookupChar('tex', -2)).to.be.equal('Incorrect index', 'Wrong suggestion');
    });

    it('We pass correct data', () => {
        expect(lookupChar('text', 1)).to.be.equal('text'.charAt(1), 'Wrong suggestion');
    });

    it('We pass correct data', () => {
        expect(lookupChar('python', 2)).to.be.equal('python'.charAt(2), 'Wrong suggestion');
    });
})