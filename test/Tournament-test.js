var expect = require('chai').expect;
var Tournament = require('../src/Tournament');
var RandomScheduler = require('../src/RandomScheduler');
var stubs = require('./stubs');

describe('Tournament', function () {
    var scheduler = new RandomScheduler('');
    var tournament = new Tournament(
        stubs.getWinner,
        stubs.getLoser,
        stubs.createMatch,
        (n) => scheduler,
        stubs.teams
    );

    describe('#getRound()', function () {
        context('0th round', function () {
            it('returns the first round', function () {
                var result = tournament.getRound(0);

                expect(result).to.equal();
            });
        });
    });
});
