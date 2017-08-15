function Round(winnerLambda, matches) {
    this.winnerLambda = winnerLambda;
    this.matches = matches;
}

Round.prototype = {

    getWinners: function () {
        return this.matches.map(this.winnerLambda);
    }
    
};

module.exports = Round;
