var _ = require('lodash');

function seedSchedule(compareFunction, teams) {
    var sortedTeams = teams.sort(compareFunction);
    var seedings = seeding(sortedTeams.length);

    var seededTeams = seedings.map((seed) => sortedTeams[seed - 1]);

    if (teams.length <= 1) {
        return [];
    }

    return _
        .chunk(seededTeams, 2)
        .filter((pair) => pair.length === 2);
}

function seeding(numPlayers) {
    var rounds = Math.floor(Math.log(numPlayers) / Math.log(2) - 1);
    var teams = [1, 2];
    var i;

    for (i = 0; i < rounds; i += 1) {
        teams = nextLayer(teams);
    }

    return teams;
}

function nextLayer(teams) {
    var out = [];
    var length = (teams.length * 2) + 1;

    teams.forEach((d) => {
        out.push(d);
        out.push(length - d);
    });

    return out;
}

module.exports = seedSchedule;
