import { Tooltip, IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const MuiTooltip = () => {
  return (
    <Stack width="50px" sx={{ mx: "auto" }}>
      <Tooltip
        title="Delete"
        placement="right"
        arrow
        enterDelay={500}
        leaveDelay={200}
      >
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default MuiTooltip;
