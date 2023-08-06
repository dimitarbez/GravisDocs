import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type CarouselProps = {
  images: string[];
  title: string;
  subtitle: string;
  authorLink?: string;
  authorName?: string;
  actionLink?: string;
  actionText?: string;
};

const Carousel: React.FC<CarouselProps> = ({
  images,
  title,
  subtitle,
  authorLink,
  authorName,
  actionLink,
  actionText,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: 'ondemand' as 'ondemand',
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full h-full sm:h-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full object-cover h-full sm:h-auto scale-150 sm:scale-100 transition-transform duration-300"
              style={{ maxHeight: '60vh' }}
            />
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 p-8 text-center z-10">
        <h2 className="text-white text-4xl font-extrabold mb-2 tracking-tight leading-tight">{title}</h2>
        <p className="text-white text-xl mb-4 font-medium italic">{subtitle}</p>
        {authorName && authorLink && (
          <p className="text-white text-lg mb-6">
            By{' '}
            <a href={authorLink} className="text-blue-400 underline hover:text-blue-600">
              {authorName}
            </a>
          </p>
        )}
        {actionText && actionLink && (
          <a href={actionLink} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-200 font-semibold">
            {actionText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Carousel;
