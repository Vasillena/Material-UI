import { Stack, Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="h6" component="h1">
        h6 Heading
      </Typography>

      <Typography variant="subtitle1">Sub title 1</Typography>
      <Typography variant="subtitle2">Sub title 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        distinctio aut accusantium corrupti in neque ipsam earum impedit quaerat
        optio, id qui commodi! Similique veniam dolor modi quia in non!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, inventore
        atque vero provident adipisci eius! Deleniti atque autem, similique
        commodi aspernatur a quibusdam harum ab possimus debitis animi itaque!
        Tenetur!
      </Typography>
    </Stack>
  );
};

export default MuiTypography;
