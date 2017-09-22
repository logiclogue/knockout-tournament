var expect = require('chai').expect;
var stubs = require('./stubs');
var TournamentFactory = require('../src/TournamentFactory');
var RandomScheduler = require('../src/RandomScheduler');

describe('TournamentFactory', function () {
    var factory;

    before(function () {
        factory = new TournamentFactory(
            stubs.getWinner,
            stubs.getLoser,
            stubs.createMatch
        );
    });

    describe('#createRandomTournament()', function () {
        it('creates a tournament with the random scheduler', function () {
            var result = factory.createRandomTournament(stubs.teams, 'seed');

            expect(result.getScheduler(0)).to.be.instanceof(RandomScheduler);
        });

        it('creates a tournament with the given seed', function () {
            var seed = 'seed';

            var result = factory.createRandomTournament(stubs.teams, seed);

            expect(result.getScheduler(0).seed).to.equal(seed);
        });
    });
});
