const {isOddOrEven} = require('./EvenOrOdd');
const {expect} = require('chai');

describe('Test Suite', () => {
    it('Returns undefines when number is passed', () => {
        expect(isOddOrEven(1)).to.be.undefined;
    });

    it('Returns undefines when array is passed', () => {
        expect(isOddOrEven([1])).to.be.undefined;
    });

    it('Returns even when string with even length is passed', () => {
        expect(isOddOrEven('text')).to.be.equal('even', 'Wrong suggestion');
    });

    it('Returns odd when string with odd length is passed', () => {
        expect(isOddOrEven('box')).to.be.equal('odd', 'Wrong suggestion');
    });

    it('Returns even when string with even length is passed', () => {
        expect(isOddOrEven('java')).to.be.equal('even', 'Wrong suggestion');
    });

    it('Returns even when string with even length is passed', () => {
        expect(isOddOrEven('python')).to.be.equal('even', 'Wrong suggestion');
    });

    it('Returns odd when string with odd length is passed', () => {
        expect(isOddOrEven('css')).to.be.equal('odd', 'Wrong suggestion');
    });

    it('Returns odd when string with odd length is passed', () => {
        expect(isOddOrEven('c++')).to.be.equal('odd', 'Wrong suggestion');
    });
});