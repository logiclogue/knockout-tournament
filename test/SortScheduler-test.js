var expect = require('chai').expect;
var SortScheduler = require('../src/SortScheduler');
var stubs = require('./stubs');

describe('SortScheduler', function () {
    var scheduler = new SortScheduler(stubs.compareFunction);

    describe('#schedule()', function () {
        context('numbers and sort on size', function () {
            it('sorts and pairs them on size', function () {
                // arrange
                var numbers = [8, 6, 7, 4, 3, 0];
                var expected = [[0, 3], [4, 6], [7, 8]];

                // act
                var result = scheduler.schedule(numbers);

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
                var result = scheduler.schedule(numbers);

                // assert
                expect(result).to.deep.equal(expected);
            });
        });
    });
});
