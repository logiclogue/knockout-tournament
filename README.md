# Knockout Tournament

Create and schedule knock out tournaments. Easily integrates with your current
classes.

## Functions

```
Match a => (a -> Team) -> (a -> Team) -> [a] -> Round
Round

Round ~> [Team]
Round.winners

Round ~> [Team]
Round.losers

Round ~> [Team]
Round.teams

Round ~> [Team]
Round.matches

Team a => (a -> a -> Number) -> [a] -> [(a, a)]
sortSchedule

Team a => (a -> a -> Number) -> [a] -> [(a, a)]
seedSchedule

Match a => ((Team, Team) -> Number -> Number -> a) -> (Team, Team) -> a
convertToMatch
```

## License

MIT License

## Author

Jordan Lord
