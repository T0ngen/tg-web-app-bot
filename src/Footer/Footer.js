import {Button} from '@mui/material';
export default function Footer() {
    const text = `Хочешь себе такой же?
Жми кнопку👇🏼`;

    return (
        <>
        <pre className="textFooter" >
                {text}
            </pre>
        <footer style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            paddingBottom: '20px',
        }}>
            
            <Button
                href='https://t.me/scdb22'
                color="inherit"
                sx={{
                    backgroundColor: '#0905EB', 
                    color: 'white',
                    borderRadius: 15,
                    fontSize: '20px', // Очень большой размер текста
                    fontWeight: 'bold', 
                    fontFamily: 'Montserrat, sans-serif',
                    
                    width: '200px',       // Явно заданная ширина
                    height: '50px',       // Явно заданная высота
                    '&:hover': {
                        backgroundColor: '#155DA0', // Цвет при наведении
                    }
                }}
                size="large"
            >
                Legacy.dev
            </Button>
            <div style={{paddingTop:'15px'}}>
            &copy; {new Date().getFullYear()} - All rights reserved
            </div>
        </footer>
        </>
    );
}
