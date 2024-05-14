
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import ButtonAppBar from './components/NavigationFooter/NavFooter';
import Typography from '@mui/material/Typography';
import Tabs from './Tabs/Tabs';
import ImageAvatars from './components/Histories/Histories';
import SimpleCarousel from './components/sidebar/sidebar';
import Footer from './Footer/Footer';






const text = `Привет!👋🏼 Не пугайся, ты не на сайте и не в другой соцсeти.
Так выглядит мой блог в Телеграмм`
const text2 = `Жми ниже, я расскажу и покажу, как здесь все устроено⬇️`
class MainList extends React.Component {

  render() {
    return (
      

        <div className='App'>
          
          
          <div id='blog'>
          <ButtonAppBar />
          </div>
          <ImageAvatars />
          
          <Typography variant="h6" component="div" className='helloText' sx={{ padding: 2, fontSize: 20, paddingTop: 3, width: '100%', fontFamily: 'Montserrat, sans-serif' }}>{text}</Typography>
          <Typography variant="h6" component="div" className='helloText' sx={{ padding: 2, fontSize: 20, paddingTop: 1, width: '100%', fontFamily: 'Montserrat, sans-serif' }}>{text2}</Typography>
          <SimpleCarousel />
          <div id="targetElement">
          <Typography variant="h6" component="div" className='whatHelp' sx={{ fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif', margin: 2 }}>Чем я могу быть полезен?</Typography>
          </div>
          <Tabs />
          <div id='wants'>
          <Footer />
          </div>
   

        </div>
      

    );
  }
}

export default MainList;