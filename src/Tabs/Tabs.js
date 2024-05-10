import ButtonTabs from "../Button/ButtonTab";
import './Tabs.css';
import { useState } from "react";

export default function Tabs() {
    const [active, setActive] = useState('Первая описание'); // Устанавливаем значение первой кнопки активной

    function handleClick(event) {
        setActive(event);
    }

    return (
        <div>
            <div className="Tabs">
                <ButtonTabs onClick={() => handleClick('Первая описание')} name={'Первая'} active={active === 'Первая описание'} />
                <ButtonTabs onClick={() => handleClick('Вторая описание')} name={'Вторая'} active={active === 'Вторая описание'} />
                <ButtonTabs onClick={() => handleClick('Третья описание')} name={'Третья'} active={active === 'Третья описание'} />
            </div>
       
            <p className="TabsText">{active}</p>
        </div>
    );
}