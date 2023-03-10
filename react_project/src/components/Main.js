import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import createImg from '../assets/img/create.png';
import lookImg from '../assets/img/look.png';

function Main() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pt: '150px',
          gap: '80px',
          flexWrap: 'wrap',
          mb: '120px',
        }}
      >
        <Box
          sx={{
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
          <a href="/create">
            <img src={createImg} alt="createImg" />
          </a>
          <Button sx={{ width: '100%' }} variant="green" href="/create">
            Create note
          </Button>
        </Box>
        <Box
          sx={{
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
          <a href="/note">
            <img src={lookImg} alt="lookImg" />
          </a>
          <Button sx={{ width: '100%' }} variant="green" href="/note">
            Look at note
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Main;
