import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

export default function ButtonAppBar() {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
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
        sx={{ position: 'absolute', top: 8, left: 8 }} // changed position to top left corner
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
      <Drawer
        anchor='left'
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{ keepMounted: true }}  // Better open performance on mobile.
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '100vw', // Set the width to 100% of the viewport width
            height: '100vh' // Set the height to 100% of the viewport height
          }
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}