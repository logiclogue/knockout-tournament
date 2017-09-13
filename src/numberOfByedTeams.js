// Number -> Number
function numberOfByedTeams(teams) {
    var desiredTeams = Math.pow(2, Math.floor(Math.log2(teams)));

    var result = (2 * desiredTeams) - teams;

    if (result === desiredTeams) {
        return 0;
    }

    return result;
}

module.exports = numberOfByedTeams;
