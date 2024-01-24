import "./App.css";
import { Stack, Divider } from "@mui/material";
import MuiButton from "./components/MuiButton";
import MuiTypography from "./components/MuiTypography";

function App() {
  return (
    <Stack spacing={4}>
      <MuiTypography />
      <Divider variant="middle" />
      <MuiButton />
      <Divider variant="middle" />
    </Stack>
  );
}

export default App;
