const expect = require('chai').expect;
const answers = require('../src/bestPractices');

describe('best practices', function(){
    it('you should avoid global variables', function() {
        answers.globals();
        expect(window.myObject).not.to.be.ok;
    });

    it('you should use parseInt correctly', function() {
        expect(answers.parseInt('12')).to.eql(12);
        expect(answers.parseInt('12px')).to.eql(12);
        expect(answers.parseInt('0x12')).to.eql(0);
    });

    it('you should understand strict comparison', function() {
        expect(answers.identity(1, '1')).to.eql(false);
        expect(answers.identity(1, 1)).to.eql(true);
        expect(answers.identity(0, false)).to.eql(false);
    });

});
