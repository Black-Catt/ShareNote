import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E2D1F9',
      darker: '#317773',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'green' },
          style: {
            backgroundColor: '#317773',
            ':hover': {
              backgroundColor: '#00695c',
            },
          },
        },
      ],
    },
  },
});

const textFieldStyle = {
  '& label.Mui-focused': {
    color: '#317773',
  },
  '& .MuiFilledInput-underline:after': {
    borderBottomColor: '#317773',
  },
  maxWidth: '520px',
};

export { theme, textFieldStyle };
