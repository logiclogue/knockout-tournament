const pair = require("./pairSchedule");
const hash = require("object-hash");

class RandomScheduler {
    // String -> Scheduler
    constructor(seed) {
        this.seed = seed || "";
    }

    // RandomScheduler ~> [Team] -> [(Team, Team)]
    schedule(teams) {
        const compareFunction = this.getCompareFunction("first run");
        const signature = hash(teams.sort(compareFunction));
        const randomisedTeams = teams.sort(this.getCompareFunction(signature));

        return pair(randomisedTeams);
    }

    // RandomScheduler ~> String -> (a -> a -> Number)
    getCompareFunction(seed) {
        return (a, b) => {
            const hashA = this.hash(seed, a);
            const hashB = this.hash(seed, b);

            if (hashA > hashB) {
                return 1;
            } else if (hashA < hashB) {
                return -1;
            }

            return 0;
        };
    }
    
    // RandomScheduler ~> String -> a -> String
    hash(seed, a) {
        return hash(hash(a) + "," + seed + "," + this.seed);
    }
}

module.exports = RandomScheduler;
