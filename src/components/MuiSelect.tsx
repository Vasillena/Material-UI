import { Box, TextField, MenuItem } from "@mui/material";

const MuiSelect = () => {
  return (
    <Box
      width="250px"
      sx={{ mx: "auto" }}
      justifyContent="center"
      textAlign="center"
    >
      <TextField label="Select country" fullWidth select>
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
