
import '../App.css';
import Stories from 'react-insta-stories';
import React from 'react';
// import history1 from './2.jpg'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SimpleBottomNavigation from '../navigation/Navigation';

const stories = [
	'https://i.ibb.co/3crZkK3/2.jpg',
	'https://i.ibb.co/kcfLkH5/1.jpg'
	// {
	// 	content: (props) => (
	// 		<div style={{ background: 'pink', padding: 20 }}>
	// 			<h1 style={{ marginTop: '100%', marginBottom: 0 }}>🌝</h1>
	// 			<h1 style={{ marginTop: 5 }}>A custom title can go here.</h1>
	// 		</div>
	// 	),
	// },
];
class Recents  extends React.Component{

  render(){

    return (
      <Stories
        stories={stories}
        defaultInterval={2000}
        width={'100%'}
        height={768}
      />
    );
  
  
    
  }

  
  
}


export default Recents;


