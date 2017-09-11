var Round = require('../src/Round');

function Match(winner, loser) {
    this.winner = winner;
    this.loser = loser;
};

var matches = [
    new Match("Derby", "Preston"),
    new Match("Man Utd", "West Ham")
];

var teams = [
    "Derby",
    "Preston",
    "Man Utd",
    "West Ham",
    "Newport County",
    "Oldham Athletic",
    "Sheffield United",
    "Sunderland"
];

var byedTeams = ["Newport County"];
var getWinner = match => match.winner;
var getLoser = match => match.loser;
var createMatch = (round, n, pair) => new Match(pair[0], pair[1]);

function compareFunction(teamA, teamB) {
    if (teamA > teamB) {
        return 1;
    } else if (teamA < teamB) {
        return -1;
    }

    return 0;
}

var stubs = {
    matches: matches,
    byedTeams: byedTeams,
    getWinner: getWinner,
    getLoser: getLoser,
    Match: Match,
    compareFunction: compareFunction,
    createMatch: createMatch,
    teams: teams
};

module.exports = stubs;
