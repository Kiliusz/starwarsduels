import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getRandomStarship } from "../../api/apihelpers";
import {
  defaultScoringState,
  drawResult,
  scoreUpdate,
  winnerResult,
} from "../../helpers/scoringHelper";
import GameNavButtons from "../GameNavButtons/GameNavButtons";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import StarshipCard from "../Cards/StarshipCard";

const Starshipspage = ({ setGameType }) => {
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
    const p1ship = await getRandomStarship();
    const p2ship = await getRandomStarship();
    getWinner(parseInt(p1ship.crew), parseInt(p2ship.crew));
    setP1Card(p1ship);
    setP2Card(p2ship);
    setLoading(false);
  };

  useEffect(() => {
    fightingRound();
  }, []);

  return (
    <>
      <Grid justifyContent="center" alignItems="center" container spacing={2}>
        <Grid sx={{ mt: 2 }} item xs={12}>
          <Typography sx={{ textAlign: "center" }} variant="h4">
            Starship Battle
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <StarshipCard
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
          <StarshipCard
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

export default Starshipspage;
