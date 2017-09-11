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
        var scheduler = this.getScheduler(roundNumber);

        var pairs = scheduler.schedule();

        var matches = pairs
            .map((pair, n) => this.createMatch(roundNumber, n, pair));

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
