import { useState, useEffect } from 'react'; // Добавляем useEffect для обновления состояния при изменении prop
import './ButtonTabs.css';
export default function ButtonTabs({ name, onClick, active }) {
    const [isActive, setIsActive] = useState(active); // Инициализируем состояние isActive с prop active

    useEffect(() => {
        setIsActive(active); // Обновляем состояние isActive при изменении prop active
    }, [active]); // Зависимость useEffect от prop active

    function handleClick() {
        setIsActive(true); // Помечаем кнопку как активную
        onClick(); // Вызываем функцию onClick из родительского компонента
    }

    return (
        <div>
            <button 
                onClick={handleClick} 
                className={isActive ? "ButtonTab active" : "ButtonTab"} // Добавляем класс "active" при активной кнопке
            >
                {name}
            </button>
        </div>
    );
}