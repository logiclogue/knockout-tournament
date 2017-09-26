var RandomScheduler = require('../src/RandomScheduler');
var Tournament = require('../src/Tournament');
var Round = require('../src/Round');
var SortScheduler = require('../src/SortScheduler');
var SeedScheduler = require('../src/SeedScheduler');
var PairScheduler = require('../src/PairScheduler');
var RandomScheduler = require('../src/RandomScheduler');

// (Match -> Team) -> (Match -> Team) -> (Number -> Number -> (Team, Team) ->
// Match) -> TournamentFacade
function TournamentFacade(getWinner, getLoser, createMatch) {
    this.getWinner = getWinner;
    this.getLoser = getLoser;
    this.createMatch = createMatch;
}

TournamentFacade.prototype = {

    // TournamentFacade ~> [Team] -> String -> Tournament
    createRandomTournament: function (teams, seed) {
        var scheduler = new RandomScheduler(seed);

        var tournament = new Tournament(
            this.getWinner,
            this.getLoser,
            this.createMatch,
            x => scheduler,
            teams
        );

        return tournament;
    },

    Tournament: Tournament,
    Round: Round,
    SortScheduler: SortScheduler,
    SeedScheduler: SeedScheduler,
    PairScheduler: PairScheduler,
    RandomScheduler: RandomScheduler
    
};

module.exports = TournamentFacade;
