import ButtonTabs from "../Button/ButtonTab";
import './Tabs.css';
import { useState } from "react";
import OutlinedCard from "../outlinedCard/OutlinedCard";
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import QuizIcon from '@mui/icons-material/Quiz';
export default function Tabs() {
    const [active, setActive] = useState('Первая описание'); // Устанавливаем значение первой кнопки активной

    function handleClick(event) {
        setActive(event);
    }

    return (
        <div>
            <div className="Tabs">
            
                <ButtonTabs endIcon={<AddToHomeScreenIcon />} onClick={() => handleClick('Первая описание')} name={'Услуги'} active={active === 'Первая описание'} />
                <ButtonTabs endIcon={<AutoAwesomeMosaicIcon />} onClick={() => handleClick('Вторая описание')} name={'Каталог'} active={active === 'Вторая описание'} />
                <ButtonTabs endIcon={<QuizIcon />} onClick={() => handleClick('Третья описание')} name={'--FAQ--'} active={active === 'Третья описание'} />
            </div>
            <OutlinedCard active={active} />
           
        </div>
    );
}