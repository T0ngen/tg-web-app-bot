import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import './ButtonTabs.css';



export default function ButtonTabs({ name, onClick, active,endIcon  }) {
    
    const [isActive, setIsActive] = useState(active);

    useEffect(() => {
        setIsActive(active);
    }, [active]);

    function handleClick() {
        setIsActive(true);
        onClick();
    }

    return (
        <Button 
            sx={{marginLeft: '5px'}}
            onClick={handleClick} 
            className={"ButtonTab"} 
            variant={isActive ? "contained" : "outlined"}
            endIcon={endIcon}
            size="medium"
        >
            {name}
        </Button>
    );
}