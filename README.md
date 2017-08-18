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

[Team] -> [(Team, Team)]
schedule

Match a => ((Team, Team) -> Number -> Number -> a) -> (Team, Team) -> a
convertToMatch
```

## License

MIT License

## Author

Jordan Lord
