import "./App.css";
import { Stack, Divider } from "@mui/material";
import MuiButton from "./components/MuiButton";
import MuiTypography from "./components/MuiTypography";
import MuiTextField from "./components/MuiTextField";
import MuiSelect from "./components/MuiSelect";
import MuiRadio from "./components/MuiRadio";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiSwitch from "./components/MuiSwitch";

function App() {
  return (
    <Stack spacing={4} style={{ margin: "0 auto" }}>
      <MuiTypography />
      <Divider variant="middle" />
      <MuiButton />
      <Divider variant="middle" />
      <MuiTextField />
      <Divider variant="middle" />
      <MuiSelect />
      <Divider variant="middle" />
      <MuiRadio />
      <Divider variant="middle" />
      <MuiCheckbox />
      <Divider variant="middle" />
      <MuiSwitch />
      <Divider variant="middle" />
    </Stack>
  );
}

export default App;
