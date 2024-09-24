import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const SnackbarComponent = ({ open, handleClose, message, severity }: any) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
