import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );


export default function OutlinedCard({active, text, info}) {

  const navigate = useNavigate();
  function handleLearnMore() {
    // Переход на страницу с деталями, передача параметра `info`
    navigate(`/details/${encodeURIComponent(info)}`);
  }



const card = (
    <React.Fragment>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography sx={{ fontWeight:'bold', color:'white' }} variant="h5" component="div">
          {active}
        </Typography>
        <br />
        <Typography sx={{color:'#a0a0a0'}} variant="body2">
          {text}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleLearnMore} size="small">Узнать больше</Button>
      </CardActions>
    </React.Fragment>
  );
  return (
    <Box sx={{ minWidth: 50 }}>
      <Card variant="outlined" sx={{ 
        backgroundColor: '#292F3F',
        borderWidth: 2,
        
        
        borderRadius: 5,
        margin: "0 10px",
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',

      }}>
        {card}
      </Card>
    </Box>
  );
}