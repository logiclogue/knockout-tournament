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

(Team -> Team -> Number) -> Schedule
SortSchedule

(Team -> Team -> Number) -> Schedule
SeedSchedule

Schedule ~> [Team] -> [(Team, Team)]
Schedule.schedule

(Team -> Team -> Number) -> [Team] -> [(Team, Team)]
sortSchedule

(Team -> Team -> Number) -> [Team] -> [(Team, Team)]
seedSchedule
```

## License

MIT License

## Author

Jordan Lord
