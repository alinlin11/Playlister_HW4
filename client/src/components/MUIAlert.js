import { useContext } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {};

export default function MUIEditSongModal() {
  const { store } = useContext(GlobalStoreContext);

  return (
    <Modal
      open={open}
      // onClose={handleClose}
      aria-labelledby="alert-modal-title"
      aria-describedby="alert-modal-description"
    >
      <Box sx={style}>
        <Typography id="alert-modal-title" variant="h6" component="h2">
          Error
        </Typography>
        <Typography id="aleet-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal >
  );
}