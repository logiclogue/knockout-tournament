var expect = require('chai').expect;
var Round = require('../src/Round');

describe("Round", function () {
    function Match(winner, loser) {
        this.winner = winner;
        this.loser = loser;
    }

    var matches = [
        new Match("Derby", "Preston"),
        new Match("Man Utd", "West Ham")
    ];
    
    var getWinner = match => match.winner;
    var getLoser = match => match.loser;

    var round = new Round(getWinner, getLoser, matches);

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
        it('should return all the teams', function () {
            // arrange
            var expected = ["Derby", "Man Utd", "Preston", "West Ham"];

            // act
            var result = round.teams;

            // assert
            expect(result).to.deep.equal(expected);
        });
    });
});
