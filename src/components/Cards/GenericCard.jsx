import {
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

const GenericCard = ({
  data,
  statistics,
  name,
  powerLabel,
  power,
  loading,
  winner = false,
  draw = false,
}) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Card
      sx={{
        width: "100%",
        minHeight: isMobile ? "65vh" : "50vh",
        border: loading || draw ? 0 : 3,
        borderColor: winner ? "success.main" : "error.main",
      }}
    >
      <CardContent>
        {loading ? (
          <Grid
            data-testid="spinner"
            container
            justifyContent="center"
            sx={{ mt: 5 }}
          >
            <CircularProgress />
          </Grid>
        ) : (
          <>
            <Typography variant="h5" color="text.secondary">
              {name}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {powerLabel}: {power}
            </Typography>
            {statistics.map((stat) => (
              <Grid
                data-testid={`stat-${stat.key}`}
                key={stat.key}
                container
                spacing={1}
                sx={{ mt: 1 }}
              >
                <Grid item xs={12} md="auto">
                  <Typography color="text.disabled" variant="body2">
                    {stat.label}:
                  </Typography>
                </Grid>
                <Grid item xs={12} md="auto">
                  <Typography variant="body2">{data[stat.key]}</Typography>
                </Grid>
              </Grid>
            ))}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default GenericCard;
