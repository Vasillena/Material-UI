import { Stack, Rating } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MuiRating = () => {
  return (
    <Stack sx={{ mx: "auto" }}>
      <Stack sx={{ mx: "auto" }}>
        <Rating precision={0.5} />
      </Stack>
      <Stack sx={{ mx: "auto" }}>
        <Rating
          precision={0.5}
          icon={<FavoriteIcon color="error" />}
          emptyIcon={<FavoriteBorderIcon />}
        />
      </Stack>
      <Stack sx={{ mx: "auto" }}>
        <Rating highlightSelectedOnly />
      </Stack>
    </Stack>
  );
};

export default MuiRating;
