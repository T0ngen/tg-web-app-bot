import '../App.css';
import Stories from 'react-insta-stories';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const stories = [
 {
  url: 'https://i.ibb.co/3crZkK3/2.jpg',
 },
 {
  url: 'https://i.ibb.co/kcfLkH5/1.jpg',
 },
];

export default function Recents() {
 const [isClosing, setClosing] = useState(false);

 const navigate = useNavigate();
 
 const handleStoriesEnd = () => {
	setClosing(true);
	setTimeout(() => {
	  navigate('/');
	}, 500); // задержка для завершения анимации
  };

  return (
	<div className={isClosing ? 'closing-animation' : ''}>
	  <Stories
		stories={stories}
		defaultInterval={4000}
		width={'auto'}
		height={'100%'}
		onAllStoriesEnd={handleStoriesEnd}
	  />
	</div>
  );
}