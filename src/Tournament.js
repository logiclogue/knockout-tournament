var Round = require('./Round');
var numberOfByedTeams = require('./numberOfByedTeams');
var _ = require('lodash');

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
        var teams = this.getTeams(roundNumber);
        var byedTeamsCount = numberOfByedTeams(teams.length);

        var byedTeams = _.take(teams, byedTeamsCount);
        var playingTeams = _.slice(teams, byedTeamsCount);

        var matches = this.getScheduler(roundNumber)
            .schedule(playingTeams)
            .map((pair, n) => this.createMatch(roundNumber, n, pair))

        var round = this.createRound(matches, byedTeams);

        return round;
    },

    // Tournament ~> Number -> [Team]
    getTeams: function (roundNumber) {
        var teams = this.teams;

        if (roundNumber > 0) {
            teams = this.getRound(roundNumber - 1).throughTeams;
        }

        return teams;
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
