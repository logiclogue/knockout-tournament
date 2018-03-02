const Round = require("./Round");
const numberOfByedTeams = require("./numberOfByedTeams");
const _ = require("lodash");

class Tournament {
    // (Match -> Team) -> (Match -> Team) -> (Number -> Number -> (Team, Team) ->
    // Match) -> (Number -> Scheduler) -> [Team] -> Tournament
    constructor(winnerLambda, loserLambda, createMatch, getScheduler, teams) {
        this.winnerLambda = winnerLambda;
        this.loserLambda = loserLambda;
        this.createMatch = createMatch;
        this.getScheduler = getScheduler;
        this.teams = teams;
    }

    // Tournament ~> Number -> Round
    getRound(roundNumber) {
        const teams = this.getTeams(roundNumber);
        const byedTeamsCount = numberOfByedTeams(teams.length);

        const byedTeams = _.take(teams, byedTeamsCount);
        const playingTeams = _.slice(teams, byedTeamsCount);

        const matches = this.getScheduler(roundNumber)
            .schedule(playingTeams)
            .map((pair, n) => this.createMatch(roundNumber, n, pair));

        const round = this.createRound(matches, byedTeams);

        return round;
    }

    // Tournament ~> Number -> [Team]
    getTeams(roundNumber) {
        let teams = this.teams;

        if (roundNumber > 0) {
            teams = this.getRound(roundNumber - 1).throughTeams;
        }

        return teams;
    }

    // Tournament ~> [Match] -> [Team] -> Round
    createRound(matches, byedTeams) {
        return new Round(
            this.winnerLambda,
            this.loserLambda,
            matches,
            byedTeams
        );
    }

    // Tournament ~> Team
    get winner() {
        return this.getWinner(0);
    }

    // Tournament ~> Number -> Team
    getWinner(roundNumber) {
        const teams = this.getTeams(roundNumber);

        if (teams.length === 1) {
            return teams[0];
        }

        return this.getWinner(roundNumber + 1);
    }

    // Tournament ~> [Round]
    get rounds() {
        return this.getRounds([], 0);
    }

    // Tournament ~> [Round] -> Number -> [Round]
    getRounds(rounds, roundNumber) {
        const round = this.getRound(roundNumber);

        if (round.teams < 2) {
            return rounds;
        }
        
        const newRounds = _.concat(rounds, round);

        return this.getRounds(newRounds, roundNumber + 1);
    }
}

module.exports = Tournament;
