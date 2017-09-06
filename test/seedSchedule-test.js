var expect = require('chai').expect;
var seedSchedule = require('../src/seedSchedule');
var stubs = require('./stubs');

describe('seedSchedule()', function () {
    var compareFunction = stubs.compareFunction;

    context('1 team passed in', function () {
        it('returns an empty array', function () {
            // arrange
            var teams = [1];

            // act
            var result = seedSchedule(compareFunction, teams);

            // assert
            expect(result).to.deep.equal([]);
        });
    });

    context('2 teams passed in', function () {
        it('returns an array of 1 pair', function () {
            // arrange
            var teams = [4, 1];

            // act
            var result = seedSchedule(compareFunction, teams);

            // assert
            expect(result).to.deep.equal([[1, 4]]);
        });
    });

    context('4 teams passed in', function () {
        it('arranges them appropriately', function () {
            // arrange
            var teams = [1, 3, 8, 4];

            // act
            var result = seedSchedule(compareFunction, teams);

            // assert
            expect(result).to.deep.equal([[1, 8], [3, 4]]);
        });
    });

    context('odd number of teams passed in', function () {
        it('discards the lowest ranked team', function () {
            // arrange
            var teams = [1, 3, 8, 9, 4];

            // act
            var result = seedSchedule(compareFunction, teams);

            // assert
            expect(result).to.deep.equal([[1, 8], [3, 4]]);
        });
    });

    context('8 teams passed in', function () {
        it('arranges them appropriately', function () {
            // arrange
            var teams = [1, 2, 3, 4, 5, 6, 7, 8];

            // act
            var result = seedSchedule(compareFunction, teams);

            // assert
            expect(result).to.deep.equal([[1, 8], [4, 5], [2, 7], [3, 6]])
        });
    });
});
