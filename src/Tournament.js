// (Match -> Team) -> (Match -> Team) -> (Team -> Team -> Number -> Number ->
// Match) -> Scheduler -> [Team] -> Tournament
function Tournament(winnerLambda, loserLambda, createMatch, scheduler, teams) {
    this.winnerLambda = winnerLambda;
    this.loserLambda = loserLambda;
    this.createMatch = createMatch;
    this.scheduler = scheduler;
    this.teams = teams;
}

module.exports = Tournament;