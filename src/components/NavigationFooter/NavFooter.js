import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

const StyledDrawer = styled(Drawer)(({ theme, bgColor }) => ({
  '& .MuiDrawer-paper': {
    transition: 'transform 1s ease-in-out, background-color 1s ease-in-out',
    backgroundColor: bgColor, // Используем переменную для динамического изменения цвета
    willChange: 'transform, background-color',
    width: '100vw',
    height: '100vh'
  }
}));

export default function ButtonAppBar() {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const [drawerBgColor, setDrawerBgColor] = React.useState('lightgray'); // начальный цвет - светло-серый

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerBgColor(open ? 'darkgray' : 'lightgray'); // изменяем цвет фона при открытии и закрытии
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{ width: 'auto', height: '100%' }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <IconButton
        onClick={toggleDrawer(false)}
        sx={{ position: 'absolute', top: 8, left: 8 }}
      >
        <MenuIcon />
      </IconButton>
      <List sx={{ mt: 5 }}>
        {['Option 1', 'Option 2', 'Option 3'].map((text, index) => (
          <ListItem button key={text} onClick={toggleDrawer(false)}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TgSoft
          </Typography>
          <Button color="inherit">Связаться</Button>
        </Toolbar>
      </AppBar>
      <StyledDrawer
        anchor='left'
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{ keepMounted: true }}
        bgColor={drawerBgColor} // Передаем динамический цвет
      >
        {drawerContent}
      </StyledDrawer>
    </Box>
  );
}