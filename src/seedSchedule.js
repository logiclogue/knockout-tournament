const _ = require("lodash");
const pairSchedule = require("./pairSchedule");

function seedSchedule(compareFunction, teams) {
    const sortedTeams = teams.sort(compareFunction);
    const seedings = seeding(sortedTeams.length);

    const seededTeams = seedings.map((seed) => sortedTeams[seed - 1]);

    if (teams.length <= 1) {
        return [];
    }

    return pairSchedule(seededTeams);
}

function seeding(numPlayers) {
    const rounds = Math.floor(Math.log(numPlayers) / Math.log(2) - 1);
    let teams = [1, 2];
    let i;

    for (i = 0; i < rounds; i += 1) {
        teams = nextLayer(teams);
    }

    return teams;
}

function nextLayer(teams) {
    let out = [];
    const length = (teams.length * 2) + 1;

    teams.forEach((d) => {
        out.push(d);
        out.push(length - d);
    });

    return out;
}

module.exports = _.curry(seedSchedule);
