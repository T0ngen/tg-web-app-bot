import '../App.css';
import Stories from 'react-insta-stories';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';



export default function Recents() {
const navigate = useNavigate();
const [isClosing, setClosing] = useState(false);
 const handleStoriesEnd = () => {
	setClosing(true);
	setTimeout(() => {
	  navigate('/');
	}, 500); // задержка для завершения анимации
  };
const stories = [
	
	{	
		
		content: ({ action, isPaused }) => {
			return (
				<div style={contentStyle}>
					<ArrowBackIosNewIcon
					style={arrow}
					
					onClick={() => {
						console.log('clicked');
						handleStoriesEnd();
					}}
				/>
					{/* <ArrowBackIosNewIcon
					style={arrow}
					onClick={() => {
						handleStoriesEnd();
					}}
				/> */}

				<img alt=""  style={image} 
				src="https://i.ibb.co/3crZkK3/2.jpg">
				</img>
					
					
				</div>
				
			)
		}
		
	},
	{	
		
		content: ({ action, isPaused }) => {
			return (
				<div style={contentStyle}>
				<ArrowBackIosNewIcon
					style={arrow}
					
					onClick={() => {
						console.log('clicked');
						handleStoriesEnd();
					}}
				/>

				<img alt="" style={image} 
				src="https://i.ibb.co/kcfLkH5/1.jpg">
				</img>
					
					
				</div>
				
			)
		}
		
	},
	
	
	
	];
	   



 


  return (
	<div className={isClosing ? 'closing-animation' : ''}>
	 
	  
		<Stories
		  
		  stories={stories}
		  defaultInterval={4000}
		  width={'100%'}
		  height={'var(--tg-viewport-height)'}
		  onAllStoriesEnd={handleStoriesEnd}
		 
		>
		
		</Stories>
	 
	</div>
  );
}

	const arrow ={ 
		position: 'absolute',
		top: 20,
		left: 20,
		zIndex: 3141,
		color: 'white',
		cursor: 'pointer',
		background: 'transparent',
		border: 'none',

		
		
		
	}

  const image = {
	display: "block",
	maxWidth: "100%",
	borderRadius: 4,
  };
  
//   const code = {
// 	background: "#eee",
// 	padding: "5px 10px",
// 	borderRadius: "4px",
// 	color: "#333",
//   };
  
  const contentStyle = {
	position: 'relative',
	background: "#333",
	width: "100%",
	
	color: "white",
	height: 'var(--tg-viewport-height)',
  };
  
//   const customSeeMore = {
// 	textAlign: "center",
// 	fontSize: 14,
// 	bottom: 20,
// 	position: "relative",
//   };
  