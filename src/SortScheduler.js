const sortSchedule = require("./sortSchedule");

class SortScheduler {
    // (Team -> Team -> Number) -> Scheduler
    constructor(compareFunction) {
        this.compareFunction = compareFunction;
    }

    // SortScheduler ~> [Team] -> [(Team, Team)]
    schedule(teams) {
        return sortSchedule(this.compareFunction, teams);
    }
}

module.exports = SortScheduler;
