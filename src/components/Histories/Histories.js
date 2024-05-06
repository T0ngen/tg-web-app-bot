import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import logo from '../ImageLogo/keyses.jpg';
import logo2 from '../ImageLogo/success.png';
import logo3 from '../ImageLogo/reviews.jpg';
import { useNavigate } from 'react-router-dom';

export default function ImageAvatars() {
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/stories');
    };


    return (
        <Stack sx={{ margin: 2, marginTop: 4 }} direction="row" spacing={3}>
            <Stack direction="column" alignItems="center" spacing={1}>
                <Avatar onClick={handleClick} alt="Remy Sharp"  src={logo2} sx={{ width: 70, height: 70 }} />
                <Typography   variant="caption" sx = {{fontSize:15, color:'white'}}>Нажми</Typography>
            </Stack>
            <Stack direction="column" alignItems="center" spacing={1}>
                <Avatar  alt="Travis Howard" src={logo} sx={{ width: 70, height: 70 }} />
                <Typography variant="caption" sx = {{fontSize:15, color:'white'}}>Кейсы</Typography>
            </Stack>
            <Stack direction="column" alignItems="center" spacing={1}>
                <Avatar alt="Travis Howard" src={logo3} sx={{ width: 70, height: 70 }} />
                <Typography variant="caption" sx = {{fontSize:15, color:'white'}}>Отзывы</Typography>
            </Stack>
        </Stack>
    );
}
