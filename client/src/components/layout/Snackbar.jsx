import { Snackbar } from "@mui/material";

function SnackbarMessage({ messasge, type, closeSnackbar, open }) {
  const handleClose = () => {
    closeSnackbar();
  };

  <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
    <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
      {messasge}
    </Alert>
  </Snackbar>;
}

export default SnackbarMessage;
