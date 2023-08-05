import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../../images/gravis_chassis_render_occlusion.jpg';
import image2 from '../../images/gravis_chassis_render.jpg';
import image3 from '../../images/20230520_091150.jpg';
import image4 from '../../images/IMG_20221216_152744_1.jpg';
import image5 from '../../images/IMG_20230515_124545_598.jpg';


const images = [image1, image2, image3, image4, image5];

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: 'ondemand' as 'ondemand', // corrected value
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="relative w-full h-full sm:h-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className="w-full object-cover h-full sm:h-auto" style={{ maxHeight: '60vh' }} />
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 p-8 text-center z-10">
        <h2 className="text-white text-4xl font-extrabold mb-2 tracking-tight leading-tight">Gravis Modular Robot</h2>
        <p className="text-white text-xl mb-4 font-medium italic">An open-source, modular robot for researchers, educators, and hobbyists.</p>
        <p className="text-white text-lg mb-6">By <a href="https://www.linkedin.com/in/dimitar-bezhanovski/" className="text-blue-400 underline hover:text-blue-600">Dimitar Bezhanovski</a></p>
        <a href="/make" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-200 font-semibold">Learn More</a>
      </div>
    </div>
  );
  
};

export default Carousel;
