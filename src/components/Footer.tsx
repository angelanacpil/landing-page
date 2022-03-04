// IMPORTS
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Stack
      justifyContent="center"
      sx={{ backgroundColor: "pink", width: "100%", height: "10rem", p: 3 }}
    >
      <Typography sx={{ textAlign: "center", color: "gray" }}>
        @ Copyright 2022 Official website of the City Government of Malabon.
      </Typography>
    </Stack>
  );
}
