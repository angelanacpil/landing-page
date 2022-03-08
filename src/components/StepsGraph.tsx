// IMPORTS
import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

export default function StepsGraph(props: any) {
  const styles = {
    outerCircle: {
      borderRadius: "50%",
      border: 2,
      p: 1,
      color: props.outerColor,
      backgroundColor: props.outerBG
    },
    innerCircle: {
      borderRadius: "50%",
      border: 1,
      width: { xs: "17rem", md: "20rem" },
      height: { xs: "17rem", md: "20rem" },
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      gap: "1rem",
      p: { xs: 2, md: 5 },
      color: props.innerColor,
      backgroundColor: props.innerBG
    },
    arrow: {
      fontSize: { xs: "7rem", md: "10rem" },
      transform: "rotate(90deg)",
      color: props.arrowColor
    },
    infoBox: {
      textAlign: "left",
      border: 2,
      width: { xs: "15rem", md: "20rem" },
      height: "20rem",
      p: 3,
      color: props.boxText,
      backgroundColor: props.boxBG
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
        my: 4,
        textAlign: "center"
      }}
    >
      <Stack spacing={10} direction={{ xs: "column", sm: "row" }}>
        <Typography sx={{ fontWeight: "bold" }} variant="h4">
          Procedure
        </Typography>

        <Stack direction="row" spacing={5}>
          <Stack direction="column" alignItems="center" spacing={5}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              alignItems="center"
              spacing={5}
            >
              {/* STEP 1 */}
              {/* CIRCLE */}
              <Box sx={styles.outerCircle}>
                <Box sx={styles.innerCircle}>
                  <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                    01.
                  </Typography>
                  <Typography>
                    File your notarized duly accomplished application form and
                    complete requirements.
                  </Typography>
                  <Typography>
                    Wait for the evaluation and assessment of application
                  </Typography>
                </Box>
              </Box>

              {/* INFOBOX */}
              <Stack
                justifyContent="center"
                alignItems="flex-start"
                spacing={1}
                sx={styles.infoBox}
              >
                <Typography sx={{ fontWeight: "bold" }}>
                  ◉ Office Responsible
                </Typography>
                <Typography>
                  BPLO Staff, One-Stop-Shop Receiving Section
                </Typography>

                <Typography sx={{ fontWeight: "bold" }}>
                  ◉ Location of Office
                </Typography>
                <Typography>3/F City Hall</Typography>

                <Typography sx={{ fontWeight: "bold" }}>
                  ◉ Processing Time
                </Typography>
                <Typography>25 minutes</Typography>

                <Typography sx={{ fontWeight: "bold" }}>
                  ◉ Amount of Fees
                </Typography>
                <Typography>N/A</Typography>
              </Stack>
            </Stack>
            {/* ARROW */}
            <DoubleArrowIcon sx={styles.arrow}></DoubleArrowIcon>
            <Stack
              direction={{ xs: "column", md: "row" }}
              alignItems="center"
              spacing={5}
            >
              {/* STEP 2 */}
              {/* CIRCLE */}
              <Box sx={styles.outerCircle}>
                <Box sx={styles.innerCircle}>
                  <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                    02.
                  </Typography>
                  <Typography>
                    File your notarized duly accomplished application form and
                    complete requirements.
                  </Typography>
                  <Typography>
                    Wait for the evaluation and assessment of application
                  </Typography>
                </Box>
              </Box>

              {/* INFOBOX */}
              <Stack spacing={1} sx={styles.infoBox}>
                <Typography sx={{ fontWeight: "bold" }}>
                  ◉ Office Responsible
                </Typography>
                <Typography>
                  BPLO Staff, One-Stop-Shop Receiving Section
                </Typography>

                <Typography sx={{ fontWeight: "bold" }}>
                  ◉ Location of Office
                </Typography>
                <Typography>3/F City Hall</Typography>

                <Typography sx={{ fontWeight: "bold" }}>
                  ◉ Processing Time
                </Typography>
                <Typography>25 minutes</Typography>

                <Typography sx={{ fontWeight: "bold" }}>
                  ◉ Amount of Fees
                </Typography>
                <Typography>N/A</Typography>
              </Stack>
            </Stack>
            <DoubleArrowIcon sx={styles.arrow}></DoubleArrowIcon>

            <Stack
              direction={{ xs: "column", md: "row" }}
              alignItems="center"
              spacing={5}
            >
              {/* STEP 3 */}
              {/* CIRCLE */}
              <Box sx={styles.outerCircle}>
                <Box sx={styles.innerCircle}>
                  <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                    03.
                  </Typography>
                  <Typography>
                    File your notarized duly accomplished application form and
                    complete requirements.
                  </Typography>
                  <Typography>
                    Wait for the evaluation and assessment of application
                  </Typography>
                </Box>
              </Box>

              {/* INFOBOX */}
              <Stack
                justifyContent="center"
                alignItems="flex-start"
                spacing={1}
                sx={styles.infoBox}
              >
                <Typography sx={{ fontWeight: "bold" }}>
                  ◉ Office Responsible
                </Typography>
                <Typography>
                  BPLO Staff, One-Stop-Shop Receiving Section
                </Typography>

                <Typography sx={{ fontWeight: "bold" }}>
                  ◉ Location of Office
                </Typography>
                <Typography>3/F City Hall</Typography>

                <Typography sx={{ fontWeight: "bold" }}>
                  ◉ Processing Time
                </Typography>
                <Typography>25 minutes</Typography>

                <Typography sx={{ fontWeight: "bold" }}>
                  ◉ Amount of Fees
                </Typography>
                <Typography>N/A</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
