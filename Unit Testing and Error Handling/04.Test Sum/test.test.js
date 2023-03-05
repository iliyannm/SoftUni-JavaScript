const {sum} = require('./sum');
const {expect} = require('chai');

describe('Test Suite', () => {
    it('Check if the answer is correct or not', () => {
        expect(sum([20, 40])).equal(60, 'Wrong answer')
    })
});