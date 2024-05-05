import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ImageLogo from '../ImageLogo/ImageLogo';
import logo from '../ImageLogo/logo.png'
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

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box sx={{ width: 'auto', height: '100%' }} role="presentation" onKeyDown={toggleDrawer(false)}>
      <IconButton onClick={toggleDrawer(false)} sx={{ position: 'absolute', top: 15, left: 20, color: 'white' }}>
        <MenuIcon />
      </IconButton>
      <List sx={{ mt: 6}}>
        {['Актуальное', 'Статьи', 'Чем я могу быть полезен?', 'Мои проекты'].map((text, index) => (
          <ListItem  button key={text} onClick={toggleDrawer(false)}>
            <ListItemText className='navFooter'  sx={{color: 'white', marginTop : 4, marginLeft:10}}  primary={text}  />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#2A2B30' }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <ImageLogo  image={logo} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: 25, fontWeight: 'bold',  fontFamily: 'Montserrat, sans-serif' }}>
            TgSoft
          </Typography>
          <Button  color="inherit" sx={{backgroundColor: 'blue', borderRadius:15, fontSize: 12,  fontFamily: 'Montserrat, sans-serif'}}>Связаться</Button>
        </Toolbar>
      </AppBar>
      <StyledDrawer anchor='left' open={isDrawerOpen} onClose={toggleDrawer(false)} ModalProps={{ keepMounted: true }} bgColor={drawerBgColor}>
        {drawerContent}
      </StyledDrawer>
    </Box>
  );
}