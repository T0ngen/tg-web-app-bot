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

// const text = `Привет! На связи TgSoft 👋🏼 Не пугайся, ты не на сайте и не в другой соцсeти.
// Так выглядит наш блог в Телеграмм - TgSoft.`
// const text2 = `Жми ниже, мы расскажем и покажем, как здесь все устроено⬇️`
class App extends React.Component {

  render() {
    return (
      <Router>
        <div className='App'>
          <Routes>
          <Route path="/" element={<MainList />} />
            <Route path="/stories" element={<RecentStoriesPage />}
             /> {/* <-- Добавили элемент для отображения страницы Recents */}
            
            <Route path="/nearby" element={<div></div>} />
          </Routes>
      
        </div>
      </Router>
    );
  }
}

export default App;