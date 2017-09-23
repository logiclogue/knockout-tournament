var RandomScheduler = require('../src/RandomScheduler');
var Tournament = require('../src/Tournament');

function TournamentFacade(getWinner, getLoser, createMatch) {
    this.getWinner = getWinner;
    this.getLoser = getLoser;
    this.createMatch = createMatch;
}

TournamentFacade.prototype = {

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
    }
    
};

module.exports = TournamentFacade;
