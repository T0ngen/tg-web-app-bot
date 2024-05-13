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
    if(window.Telegram) {
      const tg = window.Telegram.WebApp;
      tg.expand(); // Сразу расширяем приложение
  
      // Включение подтверждения при попытке закрыть приложение
      tg.isClosingConfirmationEnabled = true;
  
      // Подписка на изменение видимости страницы
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
          // Попытка расширить приложение перед тем как оно будет "скрытым"
          tg.expand();
        }
      });
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

