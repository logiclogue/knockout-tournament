var expect = require('chai').expect;
var Round = require('../src/Round');
var stubs = require('./stubs');

describe("Round", function () {
    var Match = stubs.Match;
    var matches = stubs.matches;
    var getWinner = stubs.getWinner;
    var getLoser = stubs.getLoser;
    var byedTeams = stubs.byedTeams;

    var round = new Round(getWinner, getLoser, matches, byedTeams);

    describe("#winners", function () {
        it('should return all the winners', function () {
            // arrange
            var expected = ["Derby", "Man Utd"];

            // act
            var result = round.winners;

            // assert
            expect(result).to.deep.equal(expected);
        });
    });

    describe('#losers', function () {
        it('should return all the losers', function () {
            // arrange
            var expected = ["Preston", "West Ham"];

            // act
            var result = round.losers;

            // assert
            expect(result).to.deep.equal(expected);
        });
    });

    describe('#teams', function () {
        it('should return competing and byed teams', function () {
            // arrange
            var expected = ["Derby", "Man Utd", "Preston", "West Ham", "Newport County"];

            // act
            var result = round.teams;

            // assert
            expect(result).to.deep.equal(expected);
        });
    });

    describe('#competingTeams', function () {
        it('should return competing teams', function () {
            // arrange
            var expected = ["Derby", "Man Utd", "Preston", "West Ham"];

            // act
            var result = round.competingTeams;

            // assert
            expect(result).to.deep.equal(expected);
        });
    });
});
