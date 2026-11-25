# Have You Tried Turning It Off?

[![make.fun · u-motasimfuad-have-you-tried-turning-it-off-154a938b](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![rank](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/odockdai/techsupport-oneliner/rank.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![reward](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/odockdai/techsupport-oneliner/reward.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-have-you-tried-turning-it-off-154a938b)

One funny line a hopeless tech support agent gives a desperate customer, entered in
[make.fun](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)'s
`u-motasimfuad-have-you-tried-turning-it-off-154a938b` bounty.

## The line

> I've marked your ticket as 'high priority', which moves it to the front of the queue we check on Fridays.

## The program

`main.ts` (Node 22, standard library only) checks `entry.txt` is UTF-8 text of 1-199
characters, not only whitespace, and copies it to the output directory. Running it twice
writes byte-identical output.

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT (see LICENSE). The line is original work.
