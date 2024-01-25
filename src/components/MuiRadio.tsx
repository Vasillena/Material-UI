import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

const MuiRadio = () => {
  return (
    <Box sx={{ mx: "auto" }} textAlign="center">
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-label="job-experience-group-label"
          row
        >
          <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />{" "}
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default MuiRadio;
