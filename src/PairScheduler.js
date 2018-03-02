const pairScheduler = require("./pairSchedule");
const _ = require("lodash");

class PairScheduler {
    // PairScheduler ~> [Team] -> [(Team, Team)]
    schedule(teams) {
        return _
            .chunk(teams, 2)
            .filter((pair) => pair.length === 2);
    }
}

module.exports = PairScheduler;
