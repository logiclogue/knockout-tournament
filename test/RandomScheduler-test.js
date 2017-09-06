var expect = require('chai').expect;
var RandomScheduler = require('../src/RandomScheduler');
var stubs = require('./stubs');

describe('RandomScheduler', function () {
    var scheduler = new RandomScheduler('the seed');

    describe('#schedule()', function () {
        context('1 team passed in', function () {
            it('returns an empty array', function () {
                var result = scheduler.schedule([5]);

                expect(result).to.deep.equal([]);
            });
        });

        context('2 teams passed in', function () {
            it('returns a pair that contains them', function () {
                var result = scheduler.schedule([5, 2]);

                expect(result[0]).to.contain(5);
                expect(result[0]).to.contain(2);
            });
        });

        context('8 teams passed in', function () {
            it('returns 4 pairs in a random order', function () {
                var result = scheduler.schedule([1, 2, 3, 4, 5, 6, 7, 8]);

                expect(result).to.deep.equal([[8, 4], [1, 3], [6, 5], [7, 2]]);
            });
        });

        context('8 teams passed in different order', function () {
            it('returns the same 4 pairs', function () {
                var result = scheduler.schedule([8, 2, 5, 3, 4, 7, 6, 1]);

                expect(result).to.deep.equal([[8, 4], [1, 3], [6, 5], [7, 2]]);
            });
        });

        context('a different seed is used, 8 teams are passed in', function () {
            it('returns different 4 pairs', function () {
                var scheduler = new RandomScheduler('a different seed');

                var result = scheduler.schedule([1, 2, 3, 4, 5, 6, 7, 8]);

                expect(result).to.deep.equal([[2, 7], [1, 6], [3, 4], [8, 5]]);
            });
        });
    });
});
