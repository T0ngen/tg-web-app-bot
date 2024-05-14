import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import logo from '../ImageLogo/keyses.jpg';
import logo2 from '../ImageLogo/success.png';
import logo3 from '../ImageLogo/reviews.jpg';
import { useNavigate } from 'react-router-dom';

export default function ImageAvatars() {
    


    const avatars = [
        {
          id : 1,
          alt: 'Remy Sharp',
          src: logo2,
          caption: 'Нажми'
        },
        {
          id : 2,   
          alt: 'Travis Howard',
          src: logo,
          caption: 'Кейсы'
        },
        {
          id : 3,
          alt: 'Travis Howard',
          src: logo3,
          caption: 'Отзывы'
        },
      ];
      
    


    const navigate = useNavigate();

    const handleClick = (id) => {
        console.log(id);
        navigate(`/stories/${id}`);
    };


    return (
        <Stack sx={{ margin: 2, marginTop: 12 }} direction="row" spacing={3}>
      {avatars.map((avatar, index) => (
        <Stack key={index} direction="column" alignItems="center" spacing={1}>
          <Avatar
            onClick={() => handleClick(avatar.id)}
            alt={avatar.alt}
            src={avatar.src}
            sx={{ width: 70, height: 70 }}
          />
          <Typography variant="caption" sx={{ fontSize: 15, color: 'white' }}>
            {avatar.caption}
          </Typography>
        </Stack>
      ))}
    </Stack>

    );
}
