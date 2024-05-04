// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import SimpleBottomNavigation from './navigation/Navigation';

import Recents from './recents/Recents';

class App  extends React.Component{

  


  render(){
    return (


      <Router>
      <div className='App'>
        <h1>TgSoft</h1>
        <Routes>
          <Route path="/recents" element={<Recents />} />
          <Route path="/favorites" element={<div>Favorites</div>} />
          <Route path="/nearby" element={<div>Nearby</div>} />
         
        </Routes>
        <SimpleBottomNavigation />
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


