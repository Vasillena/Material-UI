import { Box, Stack, Grid } from "@mui/material";

const MuiLayout = () => {
  return (
    <>
      <Stack
        sx={{
          mx: "auto",
          border: "1px solid",
          width: "300px",
        }}
      >
        <Box
          sx={{
            mx: "auto",
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
              cursor: "pointer",
            },
          }}
          textAlign="center"
        >
          Test
        </Box>
      </Stack>
      <Grid container my={4} spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default MuiLayout;
