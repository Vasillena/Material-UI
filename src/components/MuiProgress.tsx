import { Stack, CircularProgress, LinearProgress } from "@mui/material";

const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      <Stack spacing={2} alignItems="center">
        <CircularProgress />
        <CircularProgress color="success" />
        <CircularProgress variant="determinate" value={60} />
      </Stack>
      <Stack spacing={2}>
        <LinearProgress />
        <LinearProgress color="success" />
        <LinearProgress variant="determinate" value={60} />
      </Stack>
    </Stack>
  );
};

export default MuiProgress;
