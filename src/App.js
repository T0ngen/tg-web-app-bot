// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import ButtonAppBar from './components/NavigationFooter/NavFooter';
import Typography from '@mui/material/Typography';
import Recents from './recents/Recents';
import ImageAvatars from './components/Histories/Histories';
import SimpleCarousel from './components/sidebar/sidebar';


const text = `Привет! На связи TgSoft, лучший IT канал 👋🏼 Не пугайся, ты не на сайте и не в другой соцсeти
Так выглядит наш блог в Телеграмм - TgSoft.`
const text2 = `Жми ниже, мы расскажем и покажем, как здесь все устроено⬇️`

class App  extends React.Component{

  


  render(){
    return (

     
      <Router>
       <ButtonAppBar/>
       <ImageAvatars />
       <Typography variant="h6" component="div" className='helloText' sx={{margin:  2,fontSize:15, paddingTop:3}}  >{text} </Typography>
       <Typography variant="h6" component="div" className='helloText' sx={{margin:  2,fontSize:15, paddingTop:1}}  >{text2} </Typography>
       <SimpleCarousel />
      <div className='App'> 
        
        <Routes>
          <Route path="/recents" element={<Recents />} />
          <Route path="/favorites" element={<div>Favorites</div>} />
          <Route path="/nearby" element={<div>Nearby</div>} />
         
        </Routes>
        {/* <SimpleBottomNavigation /> */}
      </div>
    </Router>
   
  );

  }

  
  
}

// function App() {
//   return (
//     <div className="App">
//     <Header />
//       <h1> hello</h1>
//     </div>
//   );
// }

export default App;


