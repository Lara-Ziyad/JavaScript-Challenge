const expect = require('chai').expect;
const answers = require('../src/recursion');

describe('recursion', function() {
    const fileData = {
        dir : 'app',
        files : [
            'index.html',
            {
                dir : 'js',
                files: [
                    'main.js',
                    'app.js',
                    'misc.js',
                    {
                        dir : 'vendor',
                        files : [
                            'jquery.js',
                            'underscore.js'
                        ]
                    }
                ]
            },
            {
                dir : 'css',
                files : [
                    'reset.css',
                    'main.css'
                ]
            }
        ]
    };

    it('you should be able to return a list of files from the data', function() {
        const result = answers.listFiles(fileData);
        expect(result).to.be.a('array');
        expect(result.length).to.eql(8);
        expect(result.indexOf('index.html') > -1).to.be.ok;
        expect(result.indexOf('main.js') > -1).to.be.ok;
        expect(result.indexOf('underscore.js') > -1).to.be.ok;
    });

    it('you should be able to return a list of files in a subdir', function() {
        const result = answers.listFiles(fileData, 'js');
        expect(result).to.be.a('array');
        expect(result.length).to.eql(5);
        expect(result.indexOf('main.js') > -1).to.be.ok;
        expect(result.indexOf('underscore.js') > -1).to.be.ok;
    });
});

// describe('permutation', function() {
//   var arr = [ 1, 2, 3, 4 ];
//   var answer = [
//     [1, 2, 3, 4],
//     [1, 2, 4, 3],
//     [1, 3, 2, 4],
//     [1, 3, 4, 2],
//     [1, 4, 2, 3],
//     [1, 4, 3, 2],
//     [2, 1, 3, 4],
//     [2, 1, 4, 3],
//     [2, 3, 1, 4],
//     [2, 3, 4, 1],
//     [2, 4, 1, 3],
//     [2, 4, 3, 1],
//     [3, 1, 2, 4],
//     [3, 1, 4, 2],
//     [3, 2, 1, 4],
//     [3, 2, 4, 1],
//     [3, 4, 1, 2],
//     [3, 4, 2, 1],
//     [4, 1, 2, 3],
//     [4, 1, 3, 2],
//     [4, 2, 1, 3],
//     [4, 2, 3, 1],
//     [4, 3, 1, 2],
//     [4, 3, 2, 1]
//   ];

//   it('you should be able to return the permutations of an array', function() {
//     var result = answers.permute(arr);
//     expect(result).to.be.a('array');
//     var resultStrings = result.map(function(r) { return r.join(''); });

//     expect(result.length).to.eql(answer.length);

//     answer.forEach(function(a) {
//       expect(resultStrings.indexOf(a.join('')) > -1).to.be.ok;
//     });
//   });

// });

