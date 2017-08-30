// Number -> Number
function numberOfRounds(teams) {
    if (teams === 0) {
        return 0;
    }

    return Math.ceil(Math.log2(teams));
}

module.exports = numberOfRounds;
