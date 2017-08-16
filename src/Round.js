function Round(winnerLambda, loserLambda, matches) {
    this.winnerLambda = winnerLambda;
    this.loserLambda = loserLambda;
    this.matches = matches;
}

Round.prototype = {

    get winners() {
        return this.matches.map(this.winnerLambda);
    },

    get losers() {
        return this.matches.map(this.loserLambda);
    },

    get teams() {
        return this.winners.concat(this.losers);
    }
    
};

module.exports = Round;
