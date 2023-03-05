const { rgbToHexColor } = require('./rgb');
const {expect} = require('chai');

describe('RGB to Hex Color', () => {
    it('converts to black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('converts to white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF')
    });

    it('returns undefined for missing params', () => {
        expect(rgbToHexColor(0, 0)).to.be('undefined');
        expect(rgbToHexColor(0)).to.be('undefined');
        expect(rgbToHexColor()).to.be('undefined');
    })
})