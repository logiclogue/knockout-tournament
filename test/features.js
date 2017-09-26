var expect = require('chai').expect;
var stubs = require('./stubs');
var TournamentCreator = require('../index');

describe('features', function () {
    it('works', function () {
        var Match = stubs.Match;

        var creator = new TournamentCreator(
            match => match.winner,
            match => match.loser,
            (round, n, pair) => new Match(pair[0], pair[1])
        );

        var result = creator.createRandomTournament(
            [
                "Derby",
                "Preston",
                "Man Utd",
                "West Ham",
                "Newport County",
                "Oldham Athletic",
                "Sheffield United",
                "Sunderland"
            ],
            'test2'
        );

        expect(result.winner).to.equal('Derby');
    });
});
