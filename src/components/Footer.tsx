// IMPORTS
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Footer(props: any) {
  return (
    <Stack
      justifyContent="center"
      sx={{ backgroundColor: props.bg, width: "100%", height: "10rem", p: 3 }}
    >
      <Typography sx={{ textAlign: "center", color: props.textColor }}>
        @ Copyright 2022 Official website of the City Government of Malabon.
      </Typography>
    </Stack>
  );
}
