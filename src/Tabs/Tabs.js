import ButtonTabs from "../Button/ButtonTab";
import './Tabs.css';
import { useState } from "react";
import OutlinedCard from "../outlinedCard/OutlinedCard";
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import QuizIcon from '@mui/icons-material/Quiz';



export default function Tabs() {


    const firstButton = 'Разработка на заказ⚙️';

    const  secondButton = 'Каталог товаров и скриптов💻'
    const  thirdButton = 'Если у тебя есть вопросы✌️'
    

    let services = '';
    let info = '';
    const [active, setActive] = useState(firstButton); // Устанавливаем значение первой кнопки активной
    
    function handleClick(event) {
        setActive(event);
    }
    

    if (active === firstButton){
        services = `Готов решить Вашу любую задачу. От поддержки существующего проекта до создания уникального кода для вашего бизнеса - я справлюсь с любой задачей на высшем уровне.
        `
        info = '1'
    }else if (active === thirdButton){
        services= `Я помогу тебе ответить на них.
        Используй кнопку "Узнать больше" в самом низу, чтобы прочитать быструю справку по всем часто задаваемым вопросам 👩‍💻`
        info = '3'
    }else if (active === secondButton){
        services= `Ниже по кнопке "Узнать больше" указаны позиции, которые я продаю или сдаю в аренду. При покупке товара установка на сервер идет бесплатно`
        info = '2'
    }

    return (
        <div>
            <div className="Tabs">
            
                <ButtonTabs endIcon={<AddToHomeScreenIcon />} onClick={() => handleClick(firstButton)} name={'Услуги'} active={active === firstButton} />
                <ButtonTabs endIcon={<AutoAwesomeMosaicIcon />} onClick={() => handleClick(secondButton)} name={'Проекты'} active={active === secondButton} />
                <ButtonTabs endIcon={<QuizIcon />} onClick={() => handleClick(thirdButton)} name={'-FAQ-'} active={active === thirdButton} />
            </div>
            <OutlinedCard active={active} text={services} info={info}/>
           
        </div>
    );
}