import { Stack, TextField, InputAdornment } from "@mui/material";

const MuiTextField = () => {
  return (
    <Stack spacing={4}>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          label="Name"
          variant="outlined"
          size="small"
          helperText="Full Name"
          required
        />
        <TextField
          label="Name"
          variant="filled"
          size="small"
          helperText="Full Name"
          disabled
          required
        />
        <TextField
          label="Name"
          variant="standard"
          size="small"
          helperText="Full Name"
          required
          error
        />
      </Stack>

      <Stack spacing={2} direction="row" justifyContent="center">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
