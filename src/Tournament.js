var Round = require('./Round');

// (Match -> Team) -> (Match -> Team) -> (Number -> Number -> (Team, Team) ->
// Match) -> (Number -> Scheduler) -> [Team] -> Tournament
function Tournament(winnerLambda, loserLambda, createMatch, getScheduler, teams) {
    this.winnerLambda = winnerLambda;
    this.loserLambda = loserLambda;
    this.createMatch = createMatch;
    this.getScheduler = getScheduler;
    this.teams = teams;
}

Tournament.prototype = {

    // Tournament ~> Number -> Round
    getRound: function (roundNumber) {
        var teams = this.teams;

        if (roundNumber > 0) {
            teams = this.getRound(roundNumber - 1).winners;
        }

        var matches = this.getScheduler(roundNumber)
            .schedule(teams)
            .map((pair, n) => this.createMatch(roundNumber, n, pair))

        var round = this.createRound(matches, []);

        return round;
    },

    // Tournament ~> [Match] -> [Team] -> Round
    createRound: function (matches, byedTeams) {
        return new Round(
            this.winnerLambda,
            this.loserLambda,
            matches,
            byedTeams
        );
    }
    
}

module.exports = Tournament;
