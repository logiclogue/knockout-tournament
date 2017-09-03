var numberOfRounds = require('../src/numberOfRounds');
var expect = require('chai').expect;

describe('numberOfRounds()', function () {
    context('0 teams', function () {
        it('returns 0', function () {
            var result = numberOfRounds(0);

            expect(result).to.equal(0);
        });
    });

    context('1 team', function () {
        it('returns 0', function () {
            var result = numberOfRounds(1);

            expect(result).to.equal(0);
        });
    });

    context('2 teams', function () {
        it('returns 1', function () {
            var result = numberOfRounds(2);

            expect(result).to.equal(1);
        });
    });

    context('10 teams', function () {
        it('returns 4', function () {
            var result = numberOfRounds(10);

            expect(result).to.equal(4);
        });
    });
});
