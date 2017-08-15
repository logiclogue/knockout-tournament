function Round(winnerLambda, matches) {
    this.winnerLambda = winnerLambda;
    this.matches = matches;
}

Round.prototype = {

    get winners() {
        return this.matches.map(this.winnerLambda);
    }
    
};

module.exports = Round;
