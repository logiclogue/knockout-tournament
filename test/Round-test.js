var expect = require('chai').expect;
var Round = require('../src/Round');

describe("Round", function () {
    describe("#getWinners()", function () {
        it('should behave exactly as map', function () {
            // arrange
            var match = {
                winner: 5
            };
            var matches = [match, match];
            var winnerLambda = (match) => match.winner;
            var round = new Round(winnerLambda, matches);

            // act
            var result = round.getWinners();
            var expectedResult = matches.map(winnerLambda);

            // assert
            expect(result).to.deep.equal(expectedResult);
        });
    });
});
