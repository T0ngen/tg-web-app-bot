import '../App.css';
import Stories from 'react-insta-stories';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';




export default function Recents({id}) {
	console.log('recents', id)
	const navigate = useNavigate();
	const [isClosing, setClosing] = useState(false);
 	const handleStoriesEnd = () => {
		setClosing(true);
		setTimeout(() => {
			navigate('/');
	}, 500); 
  };
	let [storiesData] = useState([
		{
			src: ""
		},
		// добавьте сюда другие элементы
	]);

	

// 	useEffect(() => {
//     axios.get(`http://localhost:8080/stories/${id}`)
//       .then((res) => {
        
//         // Преобразуем массив URLs в массив объектов с `src`
//         const formattedData = res.data.urls.map(url => ({ src: url }));
// 				console.log(formattedData)
//         setStoriesData(formattedData);
//       })
//       .catch((error) => {
//         console.error('Error fetching stories:', error);
//       });
//   }, [id]);
  
	
	
	
	if (id === "1"){
		storiesData = [
			{
				src: "https://i.ibb.co/CMsnW4k/14-05-2024.jpg",
			},
			{
				src: "https://i.ibb.co/hK6jdf2/1679347968-bogatyr-club-p-shesterenki-na-chernom-fone-instagram-5.jpg",
			},
			// добавьте сюда другие элементы
		];
	}
	if (id === "2"){
		storiesData = [
			{
				src: "https://i.ibb.co/CMsnW4k/14-05-2024.jpg",
			},
			{
				src: "https://i.ibb.co/hK6jdf2/1679347968-bogatyr-club-p-shesterenki-na-chernom-fone-instagram-5.jpg",
			},
			// добавьте сюда другие элементы
		];
	}
	if (id === "3"){
		storiesData = [
			{
				src: "https://i.ibb.co/tcP7KV9/2024-05-14-18-32-46.jpg",
			},
			{
				src: "https://i.ibb.co/HLyhCHJ/2024-05-14-18-32-56.jpg",
			},
			{
				src: "https://i.ibb.co/JvdFL7z/2024-05-14-18-33-01.jpg",
			},
			{
				src: "https://i.ibb.co/rpc1Wt9/2024-05-14-18-33-04.jpg",
			},
			// добавьте сюда другие элементы
		];
	}
	if (id === "4"){
		storiesData = [
			{
				src: "https://i.ibb.co/CMsnW4k/14-05-2024.jpg",
			},
			{
				src: "https://i.ibb.co/hK6jdf2/1679347968-bogatyr-club-p-shesterenki-na-chernom-fone-instagram-5.jpg",
			},
			// добавьте сюда другие элементы
		];
	}
	if (id === "5"){
		storiesData = [
			{
				src: "https://i.ibb.co/CMsnW4k/14-05-2024.jpg",
			},
			{
				src: "https://i.ibb.co/hK6jdf2/1679347968-bogatyr-club-p-shesterenki-na-chernom-fone-instagram-5.jpg",
			},
			// добавьте сюда другие элементы
		];
	}
	

	


	const stories = storiesData.map((story, index) => ({
		content: ({ action, isPaused }) => {
			return (
				<div key={index} style={contentStyle}>
					<ArrowBackIosNewIcon
						style={arrow}
						onClick={() => {
							console.log('clicked');
							handleStoriesEnd();
						}}
					/>
					<img alt="" style={image} src={story.src} />
				</div>
			);
		}
	}));
	
	

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
		display: 'block',
		maxWidth: '100%',
		height: 'auto',
		margin: '0 auto'
	  };
	  
  

  
  const contentStyle = {
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	background: '#333',
	width: '100%',
	color: 'white',
	height: 'var(--tg-viewport-height)'
  };
  
  
