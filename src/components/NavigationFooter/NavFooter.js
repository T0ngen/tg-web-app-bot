import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ImageLogo from '../ImageLogo/ImageLogo';
import logo from '../ImageLogo/logo.png'
import { Link } from 'react-router-dom';
const StyledDrawer = styled(Drawer)(({ theme, bgColor }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: bgColor,
    width: '100vw',
    height: '100vh',
    transition: 'transform 1s ease-in-out, background-color 1s ease-in-out',
    willChange: 'transform, background-color',
  }
}));

export default function ButtonAppBar() {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const [drawerBgColor] = React.useState('#2A2B30'); // используем темно-серый цвет для Drawer

  const toggleDrawer = (open, item) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
    if (item === 'Чем я могу быть полезен?') {
      const element = document.getElementById("targetElement");
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }


    }
    if (item === 'Актуальное') {
      const element = document.getElementById("blog");
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }

      
    }
    if (item === 'Хочешь себе такой же блог?') {
      const element = document.getElementById("wants");
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      
    }

  };

  
  const drawerContent = (
    <Box sx={{ width: 'auto', height: '100%' }} role="presentation" onKeyDown={toggleDrawer(false)}>
      <IconButton onClick={toggleDrawer(false)} sx={{ position: 'absolute', top: 15, left: 20, color: 'white' }}>
        <MenuIcon />
      </IconButton>
      <List sx={{ mt: 10}}>
      
      <ListItem button onClick={toggleDrawer(false, "Актуальное")}>
        <ListItemText className='navFooter' sx={{color: 'white', marginTop: 4, marginLeft: 4}} primary="Актуальное" />
      </ListItem>
      

      <ListItem button  onClick={toggleDrawer(false, "Чем я могу быть полезен?")} >
        <Link  to="#targetElement" style={{ textDecoration: 'none' }}>
          <ListItemText className='navFooter' sx={{color: 'white', marginTop: 4, marginLeft: 4}} primary="Чем я могу быть полезен?" />
        </Link>
      </ListItem>
      <ListItem button onClick={toggleDrawer(false, "Хочешь себе такой же блог?")}>
        <ListItemText className='navFooter' sx={{color: 'white', marginTop: 4, marginLeft: 4}} primary="Хочешь себе такой же блог?" />
      </ListItem>
    </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: '#2A2B30'}}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <ImageLogo  image={logo} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: 20, fontWeight: 'bold', paddingRight:'25px' , fontFamily: 'Montserrat, sans-serif' }}>
            Legacy.dev
          </Typography>
          <Button href='https://t.me/scdb22'  color="inherit" sx={{backgroundColor: '#0905EB', borderRadius:15, fontSize: 10, fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif'}}>Связаться</Button>
        </Toolbar>
      </AppBar>
      <StyledDrawer anchor='left' open={isDrawerOpen} onClose={toggleDrawer(false)} ModalProps={{ keepMounted: true }} bgColor={drawerBgColor}>
        {drawerContent}
      </StyledDrawer>
    </Box>
  );
}