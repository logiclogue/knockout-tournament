var expect = require('chai').expect;
var Tournament = require('../src/Tournament');
var RandomScheduler = require('../src/RandomScheduler');
var stubs = require('./stubs');

describe('Tournament', function () {
    var scheduler = new RandomScheduler('');
    var tournament;
    var calledGetScheduler;

    beforeEach(function () {
        tournament = new Tournament(
            stubs.getWinner,
            stubs.getLoser,
            stubs.createMatch,
            (n) => { calledGetScheduler = n; return scheduler; },
            stubs.teams
        );
    });

    describe('#getRound()', function () {
        context('0th round', function () {
            it('calls scheduler with 0', function () {
                tournament.getRound(0);

                expect(calledGetScheduler).to.equal(0);
            });
        });
    });
});
