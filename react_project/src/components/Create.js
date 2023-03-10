import { useState } from 'react';
import env from '../env.json';
import {
  Alert,
  Snackbar,
  Button,
  TextField,
  Container,
  AlertTitle,
  Box,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { textFieldStyle } from '../themes/theme';
import createTeamImg from '../assets/img/createTeam.png';
import NoteAltIcon from '@mui/icons-material/NoteAlt';

function Create() {
  const [url, setUrl] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('');
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const sendData = (obj) => {
    setFormClass('hide');
    fetch(`${env.urlBackend}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((response) => {
        if (!response.result) {
          setLineClass('hide');
          setError(true);
          return false;
        } else if (response.result) {
          setUrl(`${env.url}${response.url}`);
          setLineClass('hash');
        }
      });
  };

  const loadData = (e) => {
    e.preventDefault();
    let note = e.target.elements.note.value;
    note = note.trim();
    if (note === '') {
      setOpen(true);
      return false;
    }
    sendData({ note: note });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setError(false);
  };

  return (
    <Container maxWidth="md">
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
          You need to fill a textarea
        </Alert>
      </Snackbar>
      <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          severity="error"
          onClose={handleClose}
          sx={{ backgroundColor: '#FF9494' }}
        >
          <AlertTitle>Error</AlertTitle>
          An error occurred
        </Alert>
      </Snackbar>
      <Box
        sx={{
          mb: '50px',
          pt: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          rowGap: '30px',
          img: {
            maxWidth: '100%',
            height: '382px',
          },
        }}
      >
        <form onSubmit={loadData} className={`${formClass} form`}>
          <TextField
            fullWidth
            sx={textFieldStyle}
            multiline
            maxRows={10}
            name="note"
            id="standard-basic"
            label="Enter a note"
            variant="filled"
          />
          <Button type="submit" variant="green" endIcon={<AddIcon />}>
            Create
          </Button>
        </form>
        <img src={createTeamImg} alt="CreateTeam" />
      </Box>
      <div className={lineClass}>
        <Button variant="green" href={url} endIcon={<NoteAltIcon />}>
          Your note
        </Button>
        <div>
          <Button
            variant="green"
            onClick={function () {
              window.location.reload();
            }}
          >
            Create new note
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Create;
