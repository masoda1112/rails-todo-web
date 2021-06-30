import PropTypes from "prop-types";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import React from "react";

const AlertMessage = ({ open, setOpen, severity, message }) => {
  const handleCloseAlertMessage = () => {
    setOpen(false);
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={handleCloseAlertMessage}
      >
        <Alert onClose={handleCloseAlertMessage} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

AlertMessage.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  severity: PropTypes.string,
  message: PropTypes.string,
};

export default AlertMessage;
