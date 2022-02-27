// IMPORTS
import React, { CSSProperties } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const styles = {
  media: {
    maxWidth: "100vw",
    position: "fixed",
    right: 0,
    top: 0,
    left: 0,
  } as React.CSSProperties,
};

export default function LogoCard() {
  return (
    <Card style={styles.media}>
      <CardContent>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 5, sm: 1, lg: 1 }}
          px={{ sm: 20, md: 15, lg: 20 }}
          pt={{ md: 1 }}
        >
          <Grid item xs={2} sm={3} md={1} lg={1}>
            <CardMedia
              component="img"
              height="100%"
              width="100%"
              image={require("./malabon-img.png")}
              alt="logo"
              sx={{
                minWidth: 65,
                maxWidth: 100,
              }}
            />
          </Grid>
          <Grid item xs={10} sm={9} md={11} lg={11}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                width: "70vw",
                minWidth: "50vw",
                maxWidth: "100vw",
                marginLeft: "1rem",
              }}
            >
              Malabon Online Services
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}