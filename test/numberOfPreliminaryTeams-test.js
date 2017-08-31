var numberOfPreliminaryTeams = require('../src/numberOfPreliminaryTeams');
var expect = require('chai').expect;

describe('numberOfPreliminaryTeams()', function () {
    context('0 teams', function () {
        it('returns 0', function () {
            var result = numberOfPreliminaryTeams(0);

            expect(result).to.equal(0);
        });
    });

    context('1 team', function () {
        it('returns 0', function () {
            var result = numberOfPreliminaryTeams(1);

            expect(result).to.equal(0);
        });
    });

    context('5 teams', function () {
        it('returns 2', function () {
            var result = numberOfPreliminaryTeams(5);

            expect(result).to.equal(2);
        });
    });
});
