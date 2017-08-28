var seedSchedule = require('./seedSchedule');

// (Team -> Team -> Number) -> Scheduler
function SeedScheduler(compareFunction) {
    this.compareFunction = compareFunction;
}

SeedScheduler.prototype = {

    // SeedScheduler ~> [Team] -> [(Team, Team)]
    schedule: function (teams) {
        return seedSchedule(this.compareFunction, teams);
    }
    
};

module.exports = SeedScheduler;
