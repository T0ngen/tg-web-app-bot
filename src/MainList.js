
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import ButtonAppBar from './components/NavigationFooter/NavFooter';
import Typography from '@mui/material/Typography';
import Tabs from './Tabs/Tabs';
import ImageAvatars from './components/Histories/Histories';
import SimpleCarousel from './components/sidebar/sidebar';







const text = `Привет! На связи TgSoft 👋🏼 Не пугайся, ты не на сайте и не в другой соцсeти.
Так выглядит наш блог в Телеграмм - TgSoft.`
const text2 = `Жми ниже, мы расскажем и покажем, как здесь все устроено⬇️`
class MainList extends React.Component {

  render() {
    return (
      

        <div className='App'>
          
          

          <ButtonAppBar />
          <ImageAvatars />
          <Typography variant="h6" component="div" className='helloText' sx={{ padding: 2, fontSize: 20, paddingTop: 3, width: '100%', fontFamily: 'Montserrat, sans-serif' }}>{text}</Typography>
          <Typography variant="h6" component="div" className='helloText' sx={{ padding: 2, fontSize: 20, paddingTop: 1, width: '100%', fontFamily: 'Montserrat, sans-serif' }}>{text2}</Typography>
          <SimpleCarousel />
          <div id="targetElement">
          <Typography variant="h6" component="div" className='whatHelp' sx={{ fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif', margin: 2 }}>Чем я могу быть полезным?</Typography>
          </div>
          <Tabs id="targetElement"/>
          
   

        </div>
      

    );
  }
}

export default MainList;