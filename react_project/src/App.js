import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Main from './components/Main';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import Error from './components/Error';
import { ThemeProvider } from '@mui/material';
import { theme } from './themes/theme';
import { Container } from '@mui/system';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="main">
        <Header></Header>
        <Container maxWidth="lg" sx={{ flex: ' 1 1 auto' }}>
          <Router>
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/create" element={<Create />} />
              <Route exact path="/note/" element={<Note />} />
              <Route exact path="/note/:noteURL" element={<Note />} />
              <Route path="*" element={<Error />}></Route>
            </Routes>
          </Router>
        </Container>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
