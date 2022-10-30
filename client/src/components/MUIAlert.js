import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
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

  return (
    <Modal
      open={!auth.loggedIn}
      // onClose={handleClose}
      aria-labelledby="alert-modal-title"
      aria-describedby="alert-modal-description"
    >
      <Box sx={style}>
        <Typography id="alert-modal-title" variant="h6" component="h2">
          Error
        </Typography>
        <Typography id="aleet-modal-description" sx={{ mt: 2 }}>
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">This is an error alert — check it out!</Alert>
          </Stack>
        </Typography>
      </Box>
    </Modal >

  );
}