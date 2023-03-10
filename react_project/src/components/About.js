import styled from '@emotion/styled';
import { Container } from '@mui/material';
import aboutImg from '../assets/img/about.png';

const Text = styled.p`
  padding-top: 60px;
  font-size: 21px;
  color: #317773;
  line-height: 27px;
  word-break: break-all;
`;

function About() {
  return (
    <Container
      maxWidth="md"
      sx={{
        mb: '70px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        img: { width: '256px', pt: '50px' },
      }}
    >
      <img src={aboutImg} alt="about" />
      <Text>
        The application utilizes hash functions to retrieve notes quickly and
        efficiently. By generating unique identifiers for each note using hash
        functions, Share Note can easily locate and retrieve the desired note
        from the database. This improves the performance and usability of the
        application, making it a more reliable and user-friendly solution for
        managing and sharing notes securely.
      </Text>
      <Text>
        How to use it? It is simple! It would help if you created your note,
        after that, you can go to your notice. If you want to make notes
        accessible for someone you need to copy the hash and give it. After this
        human can go to the note page and past this hash in the text area and
        find your note.
      </Text>
    </Container>
  );
}

export default About;
