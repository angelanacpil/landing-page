// IMPORTS
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

export default function Services() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        textAlign: "center",
        px: 2
      }}
    >
      <Typography sx={{ fontWeight: "bold" }} variant="h4">
        Services
      </Typography>
      <Typography sx={{ color: "gray" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={5}
        justifyContent="space-around"
        alignItems="center"
        sx={{ maxWidth: "auto", maxHeight: "auto", px: 5 }}
      >
        {/* SERVICE 1 */}
        <Card sx={{ p: 2, my: 4, backgroundColor: "#e1e1e1" }}>
          <Stack justifyContent="center" alignItems="center" spacing={2}>
            <Avatar sx={{ width: 60, height: 60 }}></Avatar>
            <Typography variant="h5">Service #1</Typography>
            <Typography sx={{ lineHeight: "2" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              molestiae!
            </Typography>
            <Button>Learn More</Button>
          </Stack>
        </Card>

        <Card sx={{ p: 2, my: 4 }}>
          <Stack justifyContent="center" alignItems="center" spacing={2}>
            <Avatar sx={{ width: 60, height: 60 }}></Avatar>
            <Typography variant="h5">Service #1</Typography>
            <Typography sx={{ lineHeight: "2" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              molestiae!
            </Typography>
            <Button>Learn More</Button>
          </Stack>
        </Card>

        <Card sx={{ p: 2, my: 4 }}>
          <Stack justifyContent="center" alignItems="center" spacing={2}>
            <Avatar sx={{ width: 60, height: 60 }}></Avatar>
            <Typography variant="h5">Service #1</Typography>
            <Typography sx={{ lineHeight: "2" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              molestiae!
            </Typography>
            <Button>Learn More</Button>
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
}
