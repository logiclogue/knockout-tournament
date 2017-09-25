var expect = require('chai').expect;
var stubs = require('./stubs');
var TournamentFacade = require('../src/TournamentFacade');
var RandomScheduler = require('../src/RandomScheduler');
var Tournament = require('../src/Tournament');

describe('TournamentFacade', function () {
    var facade;

    before(function () {
        facade = new TournamentFacade(
            stubs.getWinner,
            stubs.getLoser,
            stubs.createMatch
        );
    });

    describe('#createRandomTournament()', function () {
        it('creates a tournament with the random scheduler', function () {
            var result = facade.createRandomTournament(stubs.teams, 'seed');

            expect(result.getScheduler(0)).to.be.instanceof(RandomScheduler);
        });

        it('creates a tournament with the given seed', function () {
            var seed = 'seed';

            var result = facade.createRandomTournament(stubs.teams, seed);

            expect(result.getScheduler(0).seed).to.equal(seed);
        });
    });

    describe('#Tournament', function () {
        it('is Tournament', function () {
            expect(facade.Tournament).to.equal(Tournament);
        });
    });
});
