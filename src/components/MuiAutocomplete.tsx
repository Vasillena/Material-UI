import { Stack, Autocomplete, TextField } from "@mui/material";

const skills = ["HTML", "CSS", "JavaScript", "Typescript", "React"];

const MuiAutocomplete = () => {
  return (
    <Stack width="250px" sx={{ mx: "auto" }}>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        freeSolo
      />
    </Stack>
  );
};

export default MuiAutocomplete;
