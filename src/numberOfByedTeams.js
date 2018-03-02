// Number -> Number
function numberOfByedTeams(teams) {
    const desiredTeams = Math.pow(2, Math.floor(Math.log2(teams)));

    const result = (2 * desiredTeams) - teams;

    if (result === desiredTeams) {
        return 0;
    }

    return result;
}

module.exports = numberOfByedTeams;
