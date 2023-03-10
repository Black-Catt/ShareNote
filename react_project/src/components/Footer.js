import styled from '@emotion/styled';
import { Container } from '@mui/material';

function Footer() {
  const FooterText = styled.a`
    color: #e2d1f9;
    font-size: 18px;
    text-align: center;
    padding-top: 20px;
    display: block;
  `;

  return (
    <footer style={{ backgroundColor: '#317773', height: '60px' }}>
      <Container maxWidth="lg">
        <FooterText
          href="https://github.com/Black-Catt"
          target="_blank"
          rel="noreferrer"
        >
          Black-Catt
        </FooterText>
      </Container>
    </footer>
  );
}

export default Footer;
