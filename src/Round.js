var _ = require('lodash');

function Round(winnerLambda, loserLambda, matches, byedTeams) {
    this.winnerLambda = winnerLambda;
    this.loserLambda = loserLambda;
    this.matches = matches;
    this.byedTeams = byedTeams;
}

Round.prototype = {

    get winners() {
        return this.matches.map(this.winnerLambda);
    },

    get losers() {
        return this.matches.map(this.loserLambda);
    },

    get teams() {
        return this.competingTeams.concat(this.byedTeams);
    },
    
    get competingTeams() {
        return this.winners.concat(this.losers);
    }
    
};

module.exports = _.curry(Round);
