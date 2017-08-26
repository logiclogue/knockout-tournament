function Tournament(winnerLambda, loserLambda, scheduler, teams) {
    this.winnerLambda = winnerLambda;
    this.loserLambda = loserLambda;
    this.scheduler = scheduler;
    this.teams = teams;
}

module.exports = Tournament;
