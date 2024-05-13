
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from '../ImageLogo/refsystem.jpg';
import logo2 from '../ImageLogo/statya.jpg';
import logo3 from '../ImageLogo/matherials.jpg';

const SimpleCarousel = () => {
    const settings = {
        dots: true,
        
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <style>
                {`
                body, html {
                   
                    overflow-x: hidden;
                     // Предотвращение горизонтального скролла
                }
                .slick-slider {
                    padding-top: 20px;
                    position: relative;
                }
                .slick-dots li button:before {
                    font-size: 20px; // Увеличение размера точек
                    color: white; // Цвет точек
                }
                .slick-dots li {
                    padding: 5px; // Расстояние между точками
                }
                .slick-dots li.slick-active button:before {
                    color: white; // Цвет активной точки
                }
                .slider-image {
                    padding: 5px;
                    
                    margin: 0 auto;
                    width: auto;   // Ширина изображения
                    height: auto;   // Высота изображения, автоматически определяется
                }
                `}
            </style>

            <Slider {...settings}>
            <div>
                    <img src={logo3} height={212} alt='slide-3' className='slider-image' />
                </div>
                <div>
                    <img src={logo2} height={212}   alt='slide-1' className='slider-image' />
                </div>
                {/* <div>
                    <img src={logo} height={212} alt='slide-2' className='slider-image' />
                </div> */}
               
            </Slider>
        </>
    );
};

export default SimpleCarousel;