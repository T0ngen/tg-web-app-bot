// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
// import ButtonAppBar from './components/NavigationFooter/NavFooter';
// import Typography from '@mui/material/Typography';
import RecentStoriesPage from './recents/RecentsStoriesPage';
// import ImageAvatars from './components/Histories/Histories';
// import SimpleCarousel from './components/sidebar/sidebar';
import MainList from './MainList';
import Info from './Info';

class App extends React.Component {
  
  
  componentDidMount() {
    if (window.Telegram) {
      const tg = window.Telegram.WebApp;
      
      // Начальное расширение приложения при монтаже компонента
      tg.expand();
      tg.isClosingConfirmationEnabled = true;
      // Функция для проверки статуса расширения и выполнения расширения при необходимости
      const ensureExpanded = () => {
        if (!tg.isExpanded) {
          tg.expand();
        }
      };
  
      // Установка интервала для регулярной проверки
      this.expandInterval = setInterval(ensureExpanded, 1000); // проверка каждую секунду
  
      // Чистка интервала, когда компонент будет размонтирован
      this.cleanup = () => {
        clearInterval(this.expandInterval);
      };
    }
  }
  
  componentWillUnmount() {
    // Вызов метода очистки при размонтировании компонента
    if (this.cleanup) {
      this.cleanup();
    }
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Routes>
            <Route path="/" element={<MainList />} />
            <Route path="/stories" element={<RecentStoriesPage />} />
            <Route path="/details/:info"  element={<Info />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;

