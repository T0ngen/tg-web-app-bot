import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate("/recents");
    else if (newValue === 1) navigate("/favorites");
    else if (newValue === 2) navigate("/nearby");
  };

  return (
    <Box sx={{
      position: 'fixed',   // Зафиксируем позицию
      bottom: 0,           // Поместим футер в нижней части экрана
      left: 0,
      right: 0,           // Растягиваем на всю ширину
      width: '100%'        // Задаем ширину на весь экран
    }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
        sx={{ width: '100%' }} // Дополнительно растягиваем навигацию
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}