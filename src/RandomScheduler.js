var pair = require('./pairSchedule');
var hash = require('object-hash');

// String -> Scheduler
function RandomScheduler(seed) {
    this.seed = seed || '';
}

RandomScheduler.prototype = {

    // RandomScheduler ~> [Team] -> [(Team, Team)]
    schedule: function (teams) {
        var signature = hash(teams.sort(this.getCompareFunction('first run')));
        var randomisedTeams = teams.sort(this.getCompareFunction(signature));

        return pair(randomisedTeams);
    },

    // RandomScheduler ~> String -> (a -> a -> Number)
    getCompareFunction: function (seed) {
        return (a, b) => {
            var hashA = this.hash(seed, a);
            var hashB = this.hash(seed, b);

            if (hashA > hashB) {
                return 1;
            } else if (hashA < hashB) {
                return -1;
            }

            return 0;
        };
    },
    
    // RandomScheduler ~> String -> a -> String
    hash: function (seed, a) {
        return hash(hash(a) + ',' + seed + ',' + this.seed);
    }
    
};

module.exports = RandomScheduler;
