import { useState, forwardRef } from "react";
import { Snackbar, Button, Alert, AlertProps, Box } from "@mui/material";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  }
);

const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Box sx={{ width: "20px", mx: "auto" }}>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message="Form submitted successfully!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity="success">
          Form submitted successfully!
        </SnackbarAlert>
      </Snackbar>
    </Box>
  );
};

export default MuiSnackbar;
