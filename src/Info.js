import { useParams, useNavigate } from 'react-router-dom';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';


export default function Info(){
    const { info } = useParams(); // Извлечение переданного параметра
    console.log(info);

    const navigate = useNavigate();


    const infoDisplay = decodeURIComponent(info);
    let text = 'Раздел в разработке⚙️...';
    if (infoDisplay === '1'){
      text = `
Делаю:
- 🌐 Cайты/API (Front и back)
- 🤖 Телеграм бⲟты
- 🗃 Работa c BD ⟮SQL/Mongo/Firebase)
- 📱 WebApps


Умею и помогу:
- ☁️ Cloudflare
- 💾 Ⲣаб᧐та с VDS/VPS
- 🛡 Nginx/UFW
- 🌐 Д൦мeны/DNS
      `

    }

    const handleClick = () => {
        navigate('/');
    };
    return (
      <>
      <Box sx={{
        display: 'flex',      // Включаем flexbox
        flexDirection: 'column', // Элементы выстраиваются вертикально
        alignItems: 'end'     // Выравнивание элементов по правому краю
      }}>
        <CloseIcon onClick={handleClick} sx={{ color: 'white', cursor: 'pointer', margin:'20px' }} />
       
      </Box>
      
        <pre className='readMoreText'>{text}</pre>
      </>
    );
  
  
};


