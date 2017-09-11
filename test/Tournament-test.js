var expect = require('chai').expect;
var Tournament = require('../src/Tournament');
var PairScheduler = require('../src/PairScheduler');
var stubs = require('./stubs');

describe('Tournament', function () {
    var scheduler = new PairScheduler();
    var tournament;
    var calledGetScheduler;
    var calledSchedulerSchedule = false;

    beforeEach(function () {
        tournament = new Tournament(
            stubs.getWinner,
            stubs.getLoser,
            stubs.createMatch,
            (n) => {
                calledGetScheduler = n;

                return scheduler;
            },
            stubs.teams
        );
    });

    describe('#getRound()', function () {
        context('0th round', function () {
            var result;

            beforeEach(function () {
                result = tournament.getRound(0);
            });

            it('calls get scheduler with 0', function () {
                expect(calledGetScheduler).to.equal(0);
            });

            it('returns round with teams', function () {
                expect(result.teams).to.deep.equal(stubs.teams);
            });
        });

        context('1st round', function () {
            it('calls get scheduler with 1', function () {
                tournament.getRound(1);

                expect(calledGetScheduler).to.equal(1);
            });
        });
    });
});
