//IMPORTS
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

export default function ReqGraph(props: any) {
  const styles = {
    numberStyle: {
      width: 50,
      height: 50,
      color: props.numColor,
      backgroundColor: props.numBG
    },
    borderText: {
      border: `2px solid ${props.borderColor}`,
      p: 2.5,
      backgroundColor: props.borderBG,
      borderRadius: 16,
      width: "100%"
    }
  };

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
        <Stack direction="column" spacing={4} sx={{ color: props.textColor }}>
          {/* 1 */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            spacing={2}
          >
            <Avatar
              sx={{ color: props.numColor, backgroundColor: props.numBG }}
            >
              1
            </Avatar>
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
            <Avatar
              sx={{ color: props.numColor, backgroundColor: props.numBG }}
            >
              3
            </Avatar>
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
            <Avatar
              sx={{ color: props.numColor, backgroundColor: props.numBG }}
            >
              5
            </Avatar>
            <Stack alignItems="flex-start" sx={styles.borderText} spacing={1}>
              <Typography variant="h6">Locational Clearance </Typography>
              <Typography>
                City Planning and Devt. Dept. -Local Zoning Administration, 7/F
                City Hall)
              </Typography>
            </Stack>
          </Stack>

          {/* 6 */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            spacing={2}
            sx={{ pl: { md: 5 } }}
          >
            <Avatar sx={styles.numberStyle}>6</Avatar>
            <Stack alignItems="flex-start" sx={styles.borderText}>
              <Typography variant="h6">
                Certificate of Occupancy/Clearance
              </Typography>
              <Typography>
                from the Local Building Official (4/F City Hall)
              </Typography>
            </Stack>
          </Stack>

          {/* 7 */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            spacing={2}
          >
            <Avatar
              sx={{ color: props.numColor, backgroundColor: props.numBG }}
            >
              7
            </Avatar>
            <Stack alignItems="flex-start" sx={styles.borderText} spacing={1}>
              <Typography variant="h6">Health Certificate </Typography>
              <Typography>from City Health Dept., 8/F City Hall</Typography>
            </Stack>
          </Stack>

          {/* 8 */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            spacing={2}
            sx={{ pl: { md: 5 } }}
          >
            <Avatar sx={styles.numberStyle}>8</Avatar>
            <Stack alignItems="flex-start" sx={styles.borderText}>
              <Typography variant="h6">
                Community Tax Certificate (Cedula)
              </Typography>
            </Stack>
          </Stack>

          {/* 9 */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            spacing={2}
          >
            <Avatar
              sx={{ color: props.numColor, backgroundColor: props.numBG }}
            >
              9
            </Avatar>
            <Stack alignItems="flex-start" sx={styles.borderText} spacing={1}>
              <Typography variant="h6">
                Fire Safety Inspection Certificate (FSIC)
              </Typography>
            </Stack>
          </Stack>

          {/* 10 */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            spacing={2}
            sx={{ pl: { md: 5 } }}
          >
            <Avatar sx={styles.numberStyle}>10</Avatar>
            <Stack alignItems="flex-start" sx={styles.borderText}>
              <Typography variant="h6">
                CENRO Form (Hygienic Septic Tank)
              </Typography>
            </Stack>
          </Stack>

          {/* 11 */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            spacing={2}
          >
            <Avatar
              sx={{ color: props.numColor, backgroundColor: props.numBG }}
            >
              11
            </Avatar>
            <Stack alignItems="flex-start" sx={styles.borderText} spacing={1}>
              <Typography variant="h6">
                PESO Form (City Ordinance No. 07-2003)
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
