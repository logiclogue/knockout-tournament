# Knockout Tournament

Create and schedule knock out tournaments. Easily integrates with your current
classes.

## Functions

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

//(createMatch) -> (Match -> Team) -> (Match -> Team) -> [(Team, Team)] -> [Team] -> Round
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

//String -> Scheduler
//RandomScheduler

Scheduler ~> [Team] -> [(Team, Team)]
Scheduler.schedule

//(Team -> Team -> Number -> Number -> Match) -> MatchFactory
//MatchFactory

//MatchFactory ~> Number -> Number -> (Team, Team) -> Match
//MatchFactory.createMatch

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

//(Match -> Team) -> (Match -> Team) -> (Number -> Number -> (Team, Team) ->
Match) -> Team -> TournamentFactory
//TournamentFactory
```

## License

MIT License

## Author

Jordan Lord
