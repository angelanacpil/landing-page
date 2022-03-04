// IMPORTS
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const cardStyle = {
  p: 2,
  my: 2,
  backgroundColor: "#e1e1e1"
};

export default function Services() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.5rem",
        textAlign: "center",
        px: 3
      }}
    >
      <Typography sx={{ fontWeight: "bold" }} variant="h3">
        Services
      </Typography>
      <Typography sx={{ color: "gray" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </Typography>
      <Grid
        container
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        spacing={4}
        sx={{ maxWidth: "75rem" }}
      >
        {/* SERVICE 1 */}
        <Grid item xs={4}>
          <Card sx={cardStyle}>
            <Stack justifyContent="center" alignItems="center" spacing={2}>
              <Avatar sx={{ width: 60, height: 60 }}></Avatar>
              <Typography variant="h5">Service #1</Typography>
              <Typography sx={{ lineHeight: "2" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, molestiae!
              </Typography>
              <Button>Learn More</Button>
            </Stack>
          </Card>
        </Grid>

        {/* SERVICE 2 */}
        <Grid item xs={4}>
          <Card sx={cardStyle}>
            <Stack justifyContent="center" alignItems="center" spacing={2}>
              <Avatar sx={{ width: 60, height: 60 }}></Avatar>
              <Typography variant="h5">Service #2</Typography>
              <Typography sx={{ lineHeight: "2" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, molestiae!
              </Typography>
              <Button>Learn More</Button>
            </Stack>
          </Card>
        </Grid>

        {/* SERVICE 3 */}
        <Grid item xs={4}>
          <Card sx={cardStyle}>
            <Stack justifyContent="center" alignItems="center" spacing={2}>
              <Avatar sx={{ width: 60, height: 60 }}></Avatar>
              <Typography variant="h5">Service #3</Typography>
              <Typography sx={{ lineHeight: "2" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, molestiae!
              </Typography>
              <Button>Learn More</Button>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
