// Number -> Number
function numberOfPreliminaryTeams(teams) {
    return (2 * teams) - (2 * Math.pow(2, Math.floor(Math.log2(teams))));
}

module.exports = numberOfPreliminaryTeams;
