import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const MuiCheckbox = () => {
  return (
    <Box sx={{ mx: "auto" }} textAlign="center">
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={<Checkbox value="html" />}
            />
            <FormControlLabel label="CSS" control={<Checkbox value="css" />} />
            <FormControlLabel label="JS" control={<Checkbox value="js" />} />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
