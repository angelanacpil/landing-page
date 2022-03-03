// IMPORTS
import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function StepsGraph() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        p: 5,
        my: 4,
        textAlign: "center"
      }}
    >
      <Stack
        spacing={15}
        alignItems="center"
        direction={{ xs: "column", sm: "row" }}
      >
        <Typography sx={{ fontWeight: "bold" }} variant="h4">
          Steps
        </Typography>

        {/*  */}
        <Stack direction="row">
          {/* 1 */}
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar>1 </Avatar>
            <Typography variant="h6">
              Duly Accomplished Application Form
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
