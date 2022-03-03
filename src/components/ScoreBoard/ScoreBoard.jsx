import { Grid, Typography } from "@mui/material";
import React from "react";

const ScoreBoard = ({ p1Score = 0, p2Score = 0 }) => {
  return (
    <Grid container justifyContent="center" sx={{ mt: 2 }}>
      <Grid item>
        <Typography variant="h4">{p1Score}</Typography>
      </Grid>
      <Grid sx={{ mx: 2 }} item>
        <Typography variant="h4"> : </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4">{p2Score}</Typography>
      </Grid>
    </Grid>
  );
};

export default ScoreBoard;
