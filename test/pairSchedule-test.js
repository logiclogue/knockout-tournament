var expect = require('chai').expect;
var pairSchedule = require('../src/pairSchedule');
var stubs = require('./stubs');

describe('pairSchedule()', function () {
    var derby = stubs.derby;
    var united = stubs.united;

    context('0 team passed in', function () {
        it('returns an empty array', function () {
            var result = pairSchedule([]);

            expect(result).to.deep.equal([]);
        });
    });

    context('1 team passed in', function () {
        it('returns an empty array', function () {
            var result = pairSchedule([stubs.team]);

            expect(result).to.deep.equal([]);
        });
    });

    context('2 teams passed in', function () {
        it('returns them paired', function () {
            var result = pairSchedule([derby, united]);

            expect(result).to.deep.equal([[stubs.derby, stubs.united]]);
        });
    });

    context('9 teams passed in', function () {
        it('returns the first 8 in order they were given', function () {
            var result = pairSchedule([
                derby,
                united,
                derby,
                derby,
                united,
                united,
                united,
                derby,
                derby
            ]);

            expect(result).to.deep.equal([
                [derby, united],
                [derby, derby],
                [united, united],
                [united, derby]
            ]);
        });
    });
});
