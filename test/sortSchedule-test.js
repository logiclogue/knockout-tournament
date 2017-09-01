var expect = require('chai').expect;
var sortSchedule = require('../src/sortSchedule');
var stubs = require('./stubs');

describe('sortSchedule()', function () {
    var compareFunction = stubs.compareFunction;

    context('numbers and sort on size', function () {
        it('sorts and pair them on size', function () {
            // arrange
            var numbers = [8, 6, 7, 4, 3, 0];
            var expected = [[0, 3], [4, 6], [7, 8]];

            // act
            var result = sortSchedule(compareFunction, numbers);

            // assert
            expect(result).to.deep.equal(expected);
        });
    });

    context('odd number of teams', function () {
        it('discards the lowest ranked team', function () {
            // arrange
            var numbers = [8, 6, 7, 4, 3, 0, 2];
            var expected = [[0, 2], [3, 4], [6, 7]];

            // act
            var result = sortSchedule(compareFunction, numbers);

            // assert
            expect(result).to.deep.equal(expected);
        });
    });
});
