import { Box, Stack } from "@mui/material";

const MuiLayout = () => {
  return (
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
  );
};

export default MuiLayout;
