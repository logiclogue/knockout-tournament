var _ = require('lodash');

/*
 * Schedules the teams based on the compare function.
 *
 * Team a => (a -> a -> Number) -> [a] -> [(a, a)]
 *
 * @method sortSchedule
 * @param {Function} Compare function, as is in Array.prototype.sort()
 * @param {Array} Array of teams
 * @return {Array} Array of paired teams
 */
function sortSchedule(compareFunction, teams) {
    var sortedTeams = teams.sort(compareFunction);
    var pairedTeams = pairTeams(sortedTeams);

    return pairedTeams;
}

function pairTeams(sortedTeams) {
    var pairedTeams = _.chunk(sortedTeams, 2);
    var filteredTeams = _.filter(pairedTeams, (pair) => pair.length === 2);

    return filteredTeams;
}

module.exports = _.curry(sortSchedule);
