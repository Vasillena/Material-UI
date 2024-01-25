import { Box } from "@mui/material";

const MuiLayout = () => {
  return (
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
  );
};

export default MuiLayout;
