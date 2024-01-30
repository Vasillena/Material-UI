import { Stack, Link } from "@mui/material";

const MuiLink = () => {
  return (
    <Stack spacing={2} m={4} direction="row" justifyContent="center">
      <Link href="#">Link</Link>
      <Link href="#" color="secondary" underline="hover">
        Link
      </Link>
      <Link href="#" variant="body2" underline="none">
        Link
      </Link>
    </Stack>
  );
};

export default MuiLink;
