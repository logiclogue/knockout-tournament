const RandomScheduler = require("../src/RandomScheduler");
const Tournament = require("../src/Tournament");
const Round = require("../src/Round");
const SortScheduler = require("../src/SortScheduler");
const SeedScheduler = require("../src/SeedScheduler");
const PairScheduler = require("../src/PairScheduler");

class TournamentFacade {
    // (Match -> Team) -> (Match -> Team) -> (Number -> Number -> (Team, Team) ->
    // Match) -> TournamentFacade
    constructor(getWinner, getLoser, createMatch) {
        this.getWinner = getWinner;
        this.getLoser = getLoser;
        this.createMatch = createMatch;

        this.Tournament = Tournament;
        this.Round = Round;
        this.SortScheduler = SortScheduler;
        this.SeedScheduler = SeedScheduler;
        this.PairScheduler = PairScheduler;
        this.RandomScheduler = RandomScheduler;
    }

    // TournamentFacade ~> [Team] -> String -> Tournament
    createRandomTournament(teams, seed) {
        const scheduler = new RandomScheduler(seed);

        const tournament = new Tournament(
            this.getWinner,
            this.getLoser,
            this.createMatch,
            x => scheduler,
            teams
        );

        return tournament;
    }
}

module.exports = TournamentFacade;
