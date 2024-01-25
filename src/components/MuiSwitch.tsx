import { Box, FormControlLabel, Switch } from "@mui/material";

const MuiSwitch = () => {
  return (
    <Box sx={{ mx: "auto" }} textAlign="center">
      <FormControlLabel label="Dark mode" control={<Switch />} />
    </Box>
  );
};

export default MuiSwitch;
