import "./styles.css";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/NavBar";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CoverPic from "./components/malabon-city-hall.jpg";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Services from "./components/Services";
import ReqGraph from "./components/ReqGraph";
import StepsGraph from "./components/StepsGraph";
import Footer from "./components/Footer";

// FONTS
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const style = {
  display: { xs: "none", sm: "block" },
  width: { xs: "20rem", sm: "25rem" },
  height: { xs: "20rem", sm: "25rem" },
  marginTop: { xs: "15rem", sm: "15rem" },
  marginRight: { lg: "5rem" }
};

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
            <Box sx={{ p: { xs: 6.5, sm: 3, lg: 16 } }}>
              <Typography
                mb={5}
                sx={{
                  fontWeight: "bold",
                  textAlign: { xs: "center", sm: "left" },
                  fontSize: { xs: "1.4em", sm: "3em", lg: "3.5em" },
                  maxWidth: "20ch"
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
              <Button sx={{ fontSize: "1rem", p: 3 }} variant="outlined">
                REGISTER NOW
              </Button>
            </Box>
            <Avatar
              sx={style}
              alt="people"
              src="https://www.bdo.com.ph/sites/default/files/images/Body%20-%20Article%20=%20How%20to%20invest%20in%20the%20Philippine%20Stock%20Market%20-%20Location%20=%20above%20How%20to%20make%20money%20investing%20in%20the%20stock%20ma.jpg"
            />
          </main>
        </Grid>
        {/* SERVICES */}
        <Grid item>
          <Services></Services>
        </Grid>
      </Grid>

      {/* NEW BUSINESS PERMIT */}
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          my: "3.5rem",
          gap: "1.5rem",
          textAlign: "center"
        }}
      >
        <Typography sx={{ fontWeight: "bold" }} variant="h4">
          New Business Permit
        </Typography>
        <Typography sx={{ color: "gray", px: 3 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </Typography>
      </Grid>

      {/* REQUIREMENTS */}
      <Grid item>
        <ReqGraph></ReqGraph>
      </Grid>

      {/* STEPS */}
      <Grid item>
        <StepsGraph></StepsGraph>
      </Grid>

      {/* FOOTER */}
      <Grid item>
        <Footer></Footer>
      </Grid>
    </CssBaseline>
  );
}
