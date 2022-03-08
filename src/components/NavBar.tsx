// IMPORTS
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import React from "react";
import Tab from "@mui/material/Tab";
import Logo from "./malabon-img.png";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export default function NavBar() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: any, newValue) => {
    setValue(newValue);
  };

  return (
    <Card
      sx={{ position: "fixed", right: 0, top: 0, left: 0, p: 1.5, zIndex: 3 }}
    >
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <Stack spacing={2} direction="row" alignItems="center">
          <img src={Logo} alt="Logo" height="60" />
          {/* LOGO */}
          <Typography sx={{ fontWeight: "bold" }}>
            Malabon Online Services
          </Typography>
          {/* ICON */}
          <IconButton sx={{ display: { xs: "block", sm: "none" } }}>
            <MenuIcon fontSize="large"></MenuIcon>
          </IconButton>
        </Stack>
        {/* NAV LINKS */}
        <Tabs
          sx={{ display: { xs: "none", sm: "block" } }}
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab value="one" label="HOME" />
          <Tab value="two" label="BULLETIN" />
          <Tab value="three" label="TERMS & CONDITIONS" />
          <Button variant="outlined" href="#" sx={{ ml: 3 }}>
            Sign Up
          </Button>
        </Tabs>
      </Stack>
    </Card>
  );
}
