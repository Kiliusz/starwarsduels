import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getRandomHero } from "../../api/apihelpers";
import {
  defaultScoringState,
  drawResult,
  scoreUpdate,
  winnerResult,
} from "../../helpers/scoringHelper";
import GameNavButtons from "../GameNavButtons/GameNavButtons";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import HeroCard from "../Cards/HeroCard";

const HeroesPage = ({ setGameType }) => {
  const [loading, setLoading] = useState(true);
  const [p1Card, setP1Card] = useState();
  const [p2Card, setP2Card] = useState();
  const [score, setScore] = useState({ p1: 0, p2: 0 });
  const [winner, setWinner] = useState(defaultScoringState());

  const getWinner = (p1Power, p2Power) => {
    if (p1Power === p2Power) {
      setWinner(drawResult());
      return;
    }
    const isP1Winner = p1Power > p2Power;
    setScore((score) => scoreUpdate(score, isP1Winner));
    setWinner(winnerResult(isP1Winner));
  };

  const fightingRound = async () => {
    setLoading(true);
    setWinner(defaultScoringState());
    const p1hero = await getRandomHero();
    const p2hero = await getRandomHero();
    getWinner(parseInt(p1hero.height), parseInt(p2hero.height));
    setP1Card(p1hero);
    setP2Card(p2hero);
    setLoading(false);
  };

  useEffect(() => {
    fightingRound();
  }, []);

  return (
    <>
      <Grid justifyContent="center" alignItems="center" container spacing={2}>
        <Grid sx={{ my: 3 }} item xs={12}>
          <Typography sx={{ textAlign: "center" }} variant="h4">
            Hero Battle
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <HeroCard
            details={p1Card}
            loading={loading}
            winner={winner.p1}
            draw={winner.draw}
          />
        </Grid>
        <Grid item xs={1}>
          <Typography sx={{ textAlign: "center" }} variant="h5">
            VS
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <HeroCard
            details={p2Card}
            loading={loading}
            winner={winner.p2}
            draw={winner.draw}
          />
        </Grid>
        <ScoreBoard p1Score={score.p1} p2Score={score.p2} />
        <GameNavButtons backAction={setGameType} duelAction={fightingRound} />
      </Grid>
    </>
  );
};

export default HeroesPage;
