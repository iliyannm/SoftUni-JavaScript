const { isSymmetric } = require('./isSymmetric');
const {expect} = require('chai');

describe('Symmetry Checker', () => {
    it('works with symmetric number array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('works with symmetric string array', () => {
        expect(isSymmetric(['1', '2', '2', '1'])).to.be.true;
    });

    it('works with array with odd length', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('does not work with someting that is not an array', () => {
        expect(isSymmetric(1)).to.be.false;
    });

    it('does not work with symmetric strings', () => {
        expect(isSymmetric('abba')).to.be.false;
    });

    it('does not work with mixed types', () => {
        expect(isSymmetric([1, 2, 2, '1'])).to.be.false;
    });

    it('does not work with asymmetric arrays', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

})