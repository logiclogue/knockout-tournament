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

(Team -> Team -> Number) -> [Team] -> [(Team, Team)]
sortSchedule

(Team -> Team -> Number) -> [Team] -> [(Team, Team)]
seedSchedule

//Scheduler ~> [Team] -> [(Team, Team)]
//Scheduler.schedule

//(Match -> Team) -> (Match -> Team) -> Scheduler -> [Team] -> Tournament
//Tournament

//Tournament ~> Round
//Tournament.getNextRound
```

## License

MIT License

## Author

Jordan Lord
