import { Button, Grid } from "@mui/material";
import React from "react";

const GameNavButtons = ({ backAction, duelAction }) => {
  return (
    <div>
      <Grid justifyContent="center" sx={{ mt: 2 }} container spacing={2}>
        <div>
          <Button variant="outline" onClick={() => backAction(0)}>
            Back
          </Button>
        </div>
        <div>
          <Button variant="contained" onClick={() => duelAction()}>
            Next Duel
          </Button>
        </div>
      </Grid>
    </div>
  );
};

export default GameNavButtons;
