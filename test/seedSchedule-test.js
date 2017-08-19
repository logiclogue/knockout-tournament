var expect = require('chai').expect;
var seedSchedule = require('../src/seedSchedule');

describe('seedSchedule', function () {
    function compareFunction(teamA, teamB) {
        if (teamA > teamB) {
            return 1;
        } else if (teamA < teamB) {
            return -1;
        }

        return 0;
    }

    context('1 team passed in', function () {
        it('should return an empty array', function () {
            // arrange
            var teams = [1];

            // act
            var result = seedSchedule(compareFunction, teams);

            // assert
            expect(result).to.deep.equal([]);
        });
    });

    context('2 teams passed in', function () {
        it('should return an array of 1 pair', function () {
            // arrange
            var teams = [4, 1];

            // act
            var result = seedSchedule(compareFunction, teams);

            // assert
            expect(result).to.deep.equal([[1, 4]]);
        });
    });

    context('4 teams passed in', function () {
        it('should arrange them appropriately', function () {
            // arrange
            var teams = [1, 3, 8, 4];

            // act
            var result = seedSchedule(compareFunction, teams);

            // assert
            expect(result).to.deep.equal([[1, 8], [3, 4]]);
        });
    });

    context('5 teams passed in', function () {
        it('should discard the last team', function () {
            // arrange
            var teams = [1, 3, 8, 4, 9];

            // act
            var result = seedSchedule(compareFunction, teams);

            // assert
            expect(result).to.deep.equal([[1, 8], [3, 4]]);
        });
    });
});
