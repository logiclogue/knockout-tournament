var sortSchedule = require('./sortSchedule');

// (Team -> Team -> Number) -> Scheduler
function SortScheduler(compareFunction) {
    this.compareFunction = compareFunction;
}

SortScheduler.prototype = {

    // SortScheduler ~> [Team] -> [(Team, Team)]
    schedule: function (teams) {
        return sortSchedule(this.compareFunction, teams);
    }
    
};

module.exports = SortScheduler;
