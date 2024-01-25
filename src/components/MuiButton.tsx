import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MuiButton = () => {
  return (
    <Stack spacing={2}>
      <Stack spacing={2} direction="row" justifyContent="center">
        <Button variant="text">Text</Button>
        <Button variant="contained">Text</Button>
        <Button variant="outlined">Text</Button>
      </Stack>

      <Stack spacing={2} direction="row" justifyContent="center">
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="info">
          Info
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
      </Stack>

      <Stack spacing={2} direction="row" justifyContent="center">
        <Button
          variant="contained"
          color="secondary"
          startIcon={<FavoriteBorderIcon />}
        >
          Like
        </Button>

        <IconButton aria-label="like">
          <FavoriteBorderIcon />
        </IconButton>

        <Button
          variant="contained"
          color="secondary"
          endIcon={<FavoriteBorderIcon />}
        >
          Like
        </Button>
      </Stack>

      <Stack direction="row" justifyContent="center">
        <ButtonGroup variant="contained" aria-label="alignment button group">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row" justifyContent="center">
        <ToggleButtonGroup aria-label="text formatting">
          <ToggleButton value="bold" aria-label="bold">
            B
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            I
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            U
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
