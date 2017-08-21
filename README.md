# Knockout Tournament

Create and schedule knock out tournaments. Easily integrates with your current
classes.

## Functions

```
(Match -> Team) -> (Match -> Team) -> [Match] -> Round
Round

Round ~> [Team]
Round.winners

Round ~> [Team]
Round.losers

Round ~> [Team]
Round.teams

Round ~> [Team]
Round.matches

(Team -> Team -> Number) -> [Team] -> [(Team, Team)]
sortSchedule

(Team -> Team -> Number) -> [Team] -> [(Team, Team)]
seedSchedule

((Team, Team) -> Number -> Number -> Match) -> (Team, Team) -> Match
convertToMatch
```

## License

MIT License

## Author

Jordan Lord
