import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import env from '../env.json';
import {
  Alert,
  Snackbar,
  Button,
  TextField,
  Container,
  AlertTitle,
  Box,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { textFieldStyle } from '../themes/theme';
import searchImg from '../assets/img/searching.png';
import noteBoardImg from '../assets/img/noteBoard.png';

function Note() {
  let { noteURL } = useParams();
  const [noteText, setNoteText] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('hide');
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const HASH = window.location.href.split('/').pop();

  useEffect(() => {
    if (noteURL !== undefined) {
      fetch(`${env.urlBackend}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ url: noteURL }),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.result) {
            setNoteText(response.note);
            setLineClass('note');
          } else if (!response.result) {
            setLineClass('hide');
            setFormClass('');
            setError(true);
          }
        });
    } else {
      setLineClass('hide');
      setFormClass('');
    }
  }, []);

  const getNote = (e) => {
    e.preventDefault();
    let url = e.target.elements.url.value;
    url = url.trim();
    if (url === '') {
      setOpen(true);
      return false;
    }

    noteURL = url;
    window.location.href = env.url + url;
  };

  const searchNote = () => {
    window.location.href = env.url;
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
      <div className={lineClass}>
        <img src={noteBoardImg} alt="noteBoard" />
        <h4>Note:</h4>
        <p>{noteText}</p>
        <Typography
          component={'span'}
          sx={{ wordBreak: 'keep-all', color: '#317773' }}
        >
          <strong>Hash:</strong> {HASH}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px',
            flexWrap: 'wrap',
          }}
        >
          <Button
            variant="green"
            onClick={() => navigator.clipboard.writeText(HASH)}
          >
            Copy hash
          </Button>
          <Button onClick={searchNote} variant="green">
            One more note
          </Button>
        </Box>
      </div>
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
      <div className={formClass}>
        <Box
          sx={{
            mb: '150px',
            pt: '170px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            rowGap: '30px',
            img: {
              maxWidth: '100%',
            },
          }}
        >
          <img src={searchImg} alt="Searching" />
          <form className="form" action="" onSubmit={getNote}>
            <TextField
              fullWidth
              sx={textFieldStyle}
              name="url"
              id="standard-basic"
              label="Enter a hash"
              variant="filled"
            />
            <Button variant="green" type="submit" endIcon={<SearchIcon />}>
              Search note
            </Button>
          </form>
        </Box>
      </div>
    </Container>
  );
}

export default Note;
