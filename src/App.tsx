import "./App.css";
import { Box, Divider } from "@mui/material";
import MuiButton from "./components/MuiButton";
import MuiTypography from "./components/MuiTypography";
import MuiTextField from "./components/MuiTextField";
import MuiSelect from "./components/MuiSelect";
import MuiRadio from "./components/MuiRadio";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiSwitch from "./components/MuiSwitch";
import MuiRating from "./components/MuiRating";
import MuiAutocomplete from "./components/MuiAutocomplete";

function App() {
  return (
    <Box style={{ margin: "0 auto" }}>
      <MuiTypography />
      <br />
      <Divider variant="middle" />
      <br />
      <MuiButton />
      <br />
      <Divider variant="middle" />
      <br />
      <MuiTextField />
      <br />
      <Divider variant="middle" />
      <br />
      <MuiSelect />
      <br />
      <Divider variant="middle" />
      <br />
      <MuiRadio />
      <br />
      <Divider variant="middle" />
      <br />
      <MuiCheckbox />
      <br />
      <Divider variant="middle" />
      <br />
      <MuiSwitch />
      <br />
      <Divider variant="middle" />
      <br />
      <MuiRating />
      <br />
      <Divider variant="middle" />
      <br />
      <MuiAutocomplete />
      <br />
      <Divider variant="middle" />
      <br />
    </Box>
  );
}

export default App;
