var expect = require('chai').expect;
var sortSchedule = require('../src/sortSchedule');

describe('sortSchedule()', function () {
    function compareFunction(teamA, teamB) {
        if (teamA > teamB) {
            return 1;
        } else if (teamA < teamB) {
            return -1;
        }

        return 0;
    }

    context('numbers and sort on size', function () {
        it('should sort and pair them on size', function () {
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
        it('should discard the lowest ranked team', function () {
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
