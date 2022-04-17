const expect = require('chai').expect;
const answers = require('../src/logicalOperators');

describe('logical operators', function(){
    it('you should be able to work with logical or', function() {
        expect(answers.or(true, false)).to.be.ok;
        expect(answers.or(true, true)).to.be.ok;
        expect(answers.or(false, false)).not.to.be.ok;
        expect(answers.or(3, 4)).to.not.eq(7);
    });

    it('you should be able to work with logical and', function() {
        expect(answers.and(false, false)).not.to.be.ok;
        expect(answers.and(true, false)).not.to.be.ok;
        expect(answers.and(true, true)).to.be.ok;
        expect(answers.and(3, 4)).to.be.ok;
    });
});
