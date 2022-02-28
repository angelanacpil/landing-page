import "./styles.css";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/NavBar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CoverPic from "./components/malabon-city-hall.jpg";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

// FONTS
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function App() {
  return (
    <CssBaseline>
      <Grid container spacing={8} direction="column">
        {/* NAV */}
        <Grid item>
          <NavBar></NavBar>
        </Grid>
        {/* COVER */}
        <Grid item>
          <main>
            <Box sx={{ p: { xs: 10, lg: 20 } }}>
              <Typography
                mb={5}
                sx={{
                  fontWeight: "bold",
                  textAlign: { xs: "center", sm: "left" },
                  fontSize: { xs: "1.4em", sm: "2em", md: "3em" },
                  maxWidth: "20ch"
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
              <Button variant="outlined">REGISTER NOW</Button>
            </Box>
          </main>
        </Grid>
        {/* SECTIONS */}
        <Grid item></Grid>
      </Grid>
    </CssBaseline>
  );
}
