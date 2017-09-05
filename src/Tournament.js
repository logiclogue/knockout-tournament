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
        
    }
    
}

module.exports = Tournament;
