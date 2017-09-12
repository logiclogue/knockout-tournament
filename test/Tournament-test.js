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
        context('0th round with 8 teams', function () {
            var result;

            beforeEach(function () {
                result = tournament.getRound(0);
            });

            it('calls get scheduler with 0', function () {
                expect(calledGetScheduler).to.equal(0);
            });

            it('returns round with all original teams', function () {
                expect(result.teams).to.include.members(stubs.teams);
            });
        });

        context('1st round with 8 teams', function () {
            var result;

            beforeEach(function () {
                result = tournament.getRound(1);
            });

            it('calls get scheduler with 1', function () {
                expect(calledGetScheduler).to.equal(1);
            });

            it('returns round with 4 teams left', function () {
                expect(result.teams.length).to.be.equal(4);
            });

            it('returns round containing the correct 4 teams', function () {
                expect(result.teams).to.include.members([
                    "Derby", "Newport County", "Man Utd", "Sheffield United"
                ]);
            });
        });

        context('2nd round with 8 teams', function () {
            var result;

            beforeEach(function () {
                result = tournament.getRound(2);
            });

            it('returns round with 2 teams left', function () {
                expect(result.teams.length).to.be.equal(2);
            });

            it('returns round containing the correct 2 teams', function () {
                expect(result.teams).to.deep.equal(["Derby", "Newport County"]);
            });
        })

        context('3rd round with 8 teams', function () {
            var result;

            beforeEach(function () {
                result = tournament.getRound(3);
            });

            it('returns round with 0 teams left', function () {
                expect(result.teams.length).to.be.equal(0);
            });

            it('returns round with 0 byed teams', function () {
                expect(result.byedTeams.length).to.be.equal(0);
            });
        });
    });
});
