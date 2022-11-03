import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { useContext } from 'react'
import GlobalStoreContext from '../store';
import AuthContext from '../auth';

const style = {};

export default function MUIEditSongModal() {
  const { store } = useContext(GlobalStoreContext);
  const { auth } = useContext(AuthContext);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const buttonStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
  };

  function handleClose() {
    let modal = document.getElementById("alert-modal");
    modal.classList.remove("is-visible");

    auth.noError();
  }

  return (
    <Modal
      id="alert-modal"
      open={auth.error != null}
      // onClose={handleClose}
      aria-labelledby="alert-modal-title"
      aria-describedby="alert-modal-description"
    >
      <Box sx={style}>
        <Alert severity="error"> {auth.error} </Alert>
        <Button variant="text" sx={buttonStyle} onClick={handleClose}>X</Button>
      </Box>
    </Modal >

  );
}