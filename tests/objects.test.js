const expect = require('chai').expect;
const answers = require('../src/objects');

describe('objects and context', function() {
    let a;
    let b;
    let C;

    beforeEach(function() {
        a = {
            name: 'Matt',
            greeting: 'Hello',
            sayIt: function() {
                return this.greeting + ', ' + this.name + '!';
            }
        };

        b = {
            name: 'Rebecca',
            greeting: 'Yo'
        };

        C = function(name) {
            this.name = name;
            return this;
        };
    });

    it('you should be able to alter the context in which a method runs', function() {
        // define a function for fn so that the following will pass
        expect(answers.alterContext(a.sayIt, b)).to.eql('Yo, Rebecca!');
    });

    it('you should be able to alter multiple objects at once', function() {
        // define a function for fn so that the following will pass
        const obj1 = new C('Rebecca');
        const obj2 = new C('Melissa');
        const greeting = 'What\'s up';

        answers.alterObjects(C, greeting);

        expect(obj1.greeting).to.eql(greeting);
        expect(obj2.greeting).to.eql(greeting);
        expect(new C('Ellie').greeting).to.eql(greeting);
    });

    it('you should be able to iterate over an object\'s "own" properties', function() {
        // define a function for fn so that the following will pass
        const C = function() {
            this.foo = 'bar';
            this.baz = 'bim';
        };

        C.prototype.bop = 'bip';

        const obj = new C();

        expect(answers.iterate(obj)).to.eql([ 'foo: bar', 'baz: bim' ]);
    });
});
