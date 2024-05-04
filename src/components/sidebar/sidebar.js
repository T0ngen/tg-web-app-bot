import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from '../ImageLogo/refsystem.jpg';
import logo2 from '../ImageLogo/statya.jpg';
import logo3 from '../ImageLogo/matherials.jpg';
const SimpleCarousel = () => {
    const settings = {
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  
    return (
      <>
        <style>
  {`
    .slick-dots li button:before {
      font-size: 20px; // Увеличение размера точек
      color: white; // Цвет точек
    }
    .slick-dots li {
      margin: 0 5px; // Расстояние между точками
    }
    .slick-dots li.slick-active button:before {
      color: white; // Цвет активной точки
    }
    .slider-image {
      width: 90%;       // Ширина контейнера изображения
      height: 500px;     // Высота контейнера изображения
      display: block;    // Убирает лишние отступы
      object-fit: cover; // Обрезает изображение, сохраняя пропорции
    }
  `}
    </style>
  
        <Slider {...settings}>
        <div>
            <img  src={logo2} height={212} alt='slide-1' className='slider-image' />
        </div>
        <div>
            <img src={logo} height={212}  alt='slide-2' className='slider-image' />
        </div>
        <div>
            <img src={logo3} height={212} alt='slide-3' className='slider-image' />
        </div>
        </Slider>
      </>
    );
  };
  
  export default SimpleCarousel;
  