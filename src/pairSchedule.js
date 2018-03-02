const _ = require("lodash");

// [Team] -> [(Team, Team)]
function pairSchedule(teams) {
    return _
        .chunk(teams, 2)
        .filter((pair) => pair.length === 2);
}

module.exports = pairSchedule;
