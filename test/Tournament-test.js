var expect = require('chai').expect;
var Tournament = require('../src/Tournament');
var RandomScheduler = require('../src/RandomScheduler');
var stubs = require('./stubs');

describe('Tournament', function () {
    var scheduler = new RandomScheduler('');
    var tournament;
    var calledGetScheduler;
    var calledSchedulerSchedule = false;

    scheduler.schedule = function (teams) {
        calledSchedulerSchedule = true;

        return [];
    };

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
            beforeEach(function () {
                tournament.getRound(0);
            });

            it('calls get scheduler with 0', function () {
                expect(calledGetScheduler).to.equal(0);
            });

            it('calls scheduler schedule', function () {
                expect(calledSchedulerSchedule).to.be.true;
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
