var expect = require('chai').expect;
var PairScheduler = require('../src/PairScheduler');
var stubs = require('./stubs');

describe('PairScheduler', function () {
    var derby = stubs.derby;
    var united = stubs.united;

    var scheduler = new PairScheduler();

    context('0 team passed in', function () {
        it('returns an empty array', function () {
            var result = scheduler.schedule([]);

            expect(result).to.deep.equal([]);
        });
    });

    context('1 team passed in', function () {
        it('returns an empty array', function () {
            var result = scheduler.schedule([stubs.team]);

            expect(result).to.deep.equal([]);
        });
    });

    context('2 teams passed in', function () {
        it('returns them paired', function () {
            var result = scheduler.schedule([derby, united]);

            expect(result).to.deep.equal([[stubs.derby, stubs.united]]);
        });
    });

    context('9 teams passed in', function () {
        it('returns the first 8 in order they were given', function () {
            var result = scheduler.schedule([
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
