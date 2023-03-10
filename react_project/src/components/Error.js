import { Box, Typography, Button } from '@mui/material';

function Error() {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Typography variant="h1" style={{ color: '#317773' }}>
          404
        </Typography>
        <Typography
          variant="h6"
          style={{ color: '#317773', marginBottom: '20px' }}
        >
          The page you’re looking for doesn’t exist.
        </Typography>
        <Button variant="green" href="/">
          Back Home
        </Button>
      </Box>
    </div>
  );
}

export default Error;
