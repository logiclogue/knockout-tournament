var _ = require('lodash');
var pairSchedule = require('./pairSchedule');

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

    return pairSchedule(sortedTeams);
}

module.exports = _.curry(sortSchedule);
