# Knockout Tournament

Create and schedule knock out tournaments. Easily integrates with your current
classes.

## Example

```
var TournamentCreator = require('knockout-tournament');
var Match = <your match constructor>;

var creator = new TournamentCreator(
    match => match.winner,
    match => match.loser,
    (round, n, pair) => new Match(pair[0], pair[1])
);

var result = creator.createRandomTournament(
    [
        "Derby",
        "Preston",
        "Man Utd",
        "West Ham",
        "Newport County",
        "Oldham Athletic",
        "Sheffield United",
        "Sunderland"
    ],
    'test2'
);

console.log(result.winner);
```

Output:

```
Derby
```

## Type Annotations

```
(Match -> Team) -> (Match -> Team) -> [Match] -> [Team] -> Round
Round

Round ~> [Team]
Round.winners

Round ~> [Team]
Round.losers

Round ~> [Team]
Round.teams

Round ~> [Team]
Round.byes

Round ~> [Team]
Round.matches

Round ~> [Team]
Round.competingTeams

Round ~> [Team]
Round.throughTeams

//(createMatch) -> (Match -> Team) -> (Match -> Team) -> [(Team, Team)] ->
//[Team] -> Round
//createRoundFromPairs

(Team -> Team -> Number) -> [Team] -> [(Team, Team)]
sortSchedule

(Team -> Team -> Number) -> [Team] -> [(Team, Team)]
seedSchedule

[Team] -> [(Team, Team)]
pairSchedule

Number -> Number
numberOfRounds

Number -> Number
numberOfPreliminaryTeams

Number -> Number
numberOfByedTeams

(Team -> Team -> Number) -> Scheduler
SortScheduler

(Team -> Team -> Number) -> Scheduler
SeedScheduler

Scheduler
PairScheduler

String -> Scheduler
RandomScheduler

Scheduler ~> [Team] -> [(Team, Team)]
Scheduler.schedule

(Match -> Team) -> (Match -> Team) -> (Number -> Number -> (Team, Team) ->
Match) -> (Number -> Scheduler) -> [Team] -> Tournament
Tournament

Tournament ~> Number -> Round
Tournament.getRound

Tournament ~> Team
Tournament.winner

Tournament ~> Number -> Team
Tournament.getWinner

Tournament ~> [Round]
Tournament.rounds

(Match -> Team) -> (Match -> Team) -> (Number -> Number -> (Team, Team) ->
Match) -> TournamentFacade
TournamentFacade

TournamentFacade ~> [Team] -> String -> Tournament
TournamentFacade.createRandomTournament
```

## License

MIT License

## Author

Jordan Lord
