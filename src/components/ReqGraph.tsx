//IMPORTS
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

const styles = {
  numberStyle: {
    width: 50,
    height: 50
  },
  borderText: {
    border: "2px solid pink",
    p: 2.5,
    backgroundColor: "white",
    borderRadius: 16,
    width: "100%"
  }
};

export default function ReqGraph() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        p: 5,
        my: 4
      }}
    >
      <Stack
        spacing={10}
        direction={{ xs: "column", sm: "row" }}
        sx={{ textAlign: { xs: "center", sm: "left" } }}
      >
        <Typography sx={{ fontWeight: "bold" }} variant="h4">
          Requirements
        </Typography>
        {/* Items */}
        <Stack direction="column" spacing={4}>
          {/* 1 */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            spacing={2}
          >
            <Avatar>1</Avatar>
            <Typography variant="h6" sx={styles.borderText}>
              Duly Accomplished Application Form
            </Typography>
          </Stack>

          {/* 2 */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            spacing={2}
            sx={{ pl: { md: 5 } }}
          >
            <Avatar sx={styles.numberStyle}>2</Avatar>
            <Stack alignItems="flex-start" sx={styles.borderText}>
              <Typography variant="h6">DTI or SEC Registration</Typography>
            </Stack>
          </Stack>

          {/* 3 */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            spacing={2}
          >
            <Avatar>3</Avatar>
            <Typography variant="h6" sx={styles.borderText}>
              Barangay Clearance
            </Typography>
          </Stack>

          {/* 4 */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            spacing={2}
            sx={{ pl: { md: 5 } }}
          >
            <Avatar sx={styles.numberStyle}>4</Avatar>
            <Stack alignItems="flex-start" sx={styles.borderText}>
              <Typography variant="h6">
                Tax Clearance or Certification of No Real Properties
              </Typography>
            </Stack>
          </Stack>

          {/* 5 */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            spacing={2}
          >
            <Avatar>5</Avatar>
            <Stack alignItems="flex-start" sx={styles.borderText} spacing={1}>
              <Typography variant="h6">Locational Clearance </Typography>
              <Typography>
                City Planning and Devt. Dept. -Local Zoning Administration, 7/F
                City Hall)
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
