var pairScheduler = require('./pairSchedule');
var _ = require('lodash');

// Scheduler
function PairScheduler() {
    
}

PairScheduler.prototype = {

    // PairScheduler ~> [Team] -> [(Team, Team)]
    schedule: function (teams) {
        return _
            .chunk(teams, 2)
            .filter((pair) => pair.length === 2);
    }
    
}

module.exports = PairScheduler;
