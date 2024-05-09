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


class App extends React.Component {
  componentDidMount() {
    window.scrollBy(0, window.innerHeight);
    if(window.Telegram) {
      const tg = window.Telegram.WebApp;
      tg.expand();
    }
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Routes>
            <Route path="/" element={<MainList />} />
            <Route path="/stories" element={<RecentStoriesPage />} />
            <Route path="/nearby" element={<div></div>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;

