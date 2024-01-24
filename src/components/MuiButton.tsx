import { Stack, Button, IconButton } from "@mui/material";
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
    </Stack>
  );
};

export default MuiButton;
