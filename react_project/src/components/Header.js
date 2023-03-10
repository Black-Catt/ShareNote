import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Container,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import { theme } from '../themes/theme';

function Header() {
  const [open, setOpen] = useState(false);

  const Logo = styled.h1`
    font-size: 21px;
    text-align: center;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #317773;
  `;

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
            <Box
              sx={{
                p: 5,
                height: 1,
                backgroundColor: theme.palette.primary.main,
              }}
            >
              <IconButton
                onClick={() => setOpen(false)}
                sx={{ mb: 2, display: 'flex', justifyItems: 'flex-end' }}
              >
                <CloseIcon />
              </IconButton>
              <Divider sx={{ mb: 2 }} />
              <nav>
                <List sx={{ color: '#317773' }}>
                  <ListItem disablePadding>
                    <ListItemButton href="/">
                      <ListItemIcon>
                        <HomeIcon
                          sx={{ color: theme.palette.primary.darker }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Home" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton href="/create">
                      <ListItemIcon>
                        <AddCircleIcon
                          sx={{ color: theme.palette.primary.darker }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Create" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton href="/note">
                      <ListItemIcon>
                        <CreateIcon
                          sx={{ color: theme.palette.primary.darker }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Note" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton href="/about">
                      <ListItemIcon>
                        <InfoIcon
                          sx={{ color: theme.palette.primary.darker }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="About" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Box>
          </Drawer>
          <IconButton
            onClick={() => setOpen(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{ color: theme.palette.primary.darker }} />
          </IconButton>
          <Link href="/">
            <Logo>
              ShareNote
              <SaveAsIcon
                sx={{ fontSize: '30px', color: theme.palette.primary.darker }}
              />
            </Logo>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
