var numberOfByedTeams = require('../src/numberOfByedTeams');
var expect = require('chai').expect;

describe('numberOfByedTeams()', function () {
    context('0 teams', function () {
        it('returns 0', function () {
            var result = numberOfByedTeams(0);

            expect(result).to.equal(0);
        });
    });

    context('1 team', function () {
        it('returns 0', function () {
            var result = numberOfByedTeams(1);

            expect(result).to.equal(0);
        });
    });

    context('2 teams', function () {
        it('returns 0', function () {
            var result = numberOfByedTeams(2);

            expect(result).to.equal(0);
        })
    });

    context('3 teams', function () {
        it('returns 1', function () {
            var result = numberOfByedTeams(3);

            expect(result).to.equal(1);
        });
    });

    context('128 teams', function () {
        it('returns 0', function () {
            var result = numberOfByedTeams(128);

            expect(result).to.equal(0);
        });
    });

    context('129 teams', function () {
        it('returns 127', function () {
            var result = numberOfByedTeams(129);

            expect(result).to.equal(127);
        });
    });
});
