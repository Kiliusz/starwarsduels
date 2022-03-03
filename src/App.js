import { useState } from "react";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import "./App.css";
import Heroespage from "./components/pages/Heroespage";
import Starshipspage from "./components/pages/Starshipspage";
import cats_sabres from "./assets/cats_sabres.gif";

function App() {
  const [gameType, setGameType] = useState(0);

  return (
    <div className="App">
      <CssBaseline />
      <Container>
        {gameType === 0 && (
          <>
            <Grid
              container
              direction="column"
              alignItems="center"
              sx={{ mt: 5 }}
            >
              <Grid item>
                <Typography variant="h3">
                  Select what forces you want to battle
                </Typography>
              </Grid>
              <Grid item sx={{ my: 5 }}>
                <Grid container spacing={2}>
                  <Grid item>
                    <Button
                      sx={{ p: 5 }}
                      onClick={() => setGameType(1)}
                      variant="contained"
                      size="large"
                    >
                      Starships
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      sx={{ p: 5 }}
                      onClick={() => setGameType(2)}
                      variant="contained"
                      size="large"
                    >
                      Heroes
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid>
                <img src={cats_sabres} alt="" />
              </Grid>
            </Grid>
          </>
        )}
        {gameType === 1 && <Starshipspage setGameType={setGameType} />}
        {gameType === 2 && <Heroespage setGameType={setGameType} />}
      </Container>
    </div>
  );
}

export default App;
