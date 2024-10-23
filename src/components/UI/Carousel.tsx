// src/components/UI/Carousel.tsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface CarouselProps {
  images: string[];
  title: string;
  subtitle: string;
  authorLink?: string;
  authorName?: string;
  actionLink?: () => void;
  actionText?: string;
}

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
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    accessibility: true,
    swipe: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="relative w-full h-full sm:h-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover h-96 sm:h-auto transition-transform duration-500 transform hover:scale-105"
              style={{ minHeight: '45vh', maxHeight: '60vh' }}
            />
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-40 dark:bg-gray-800 dark:bg-opacity-60 flex flex-col items-center justify-center text-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-white dark:text-gray-200 text-4xl font-extrabold mb-2 tracking-tight leading-tight">
                {title}
              </h2>
              <p className="text-white dark:text-gray-300 text-xl mb-4 font-medium italic">
                {subtitle}
              </p>
              {authorName && authorLink && (
                <p className="text-white dark:text-gray-300 text-lg mb-6">
                  By{' '}
                  <a
                    href={authorLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 dark:text-blue-300 underline hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {authorName}
                  </a>
                </p>
              )}
              {actionText && actionLink && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={actionLink}
                  className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-200 font-semibold shadow-lg"
                >
                  {actionText}
                </motion.button>
              )}
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Next Arrow
const NextArrow: React.FC<any> = ({ onClick }) => {
  return (
    <div
      className="absolute right-3 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer text-white"
      onClick={onClick}
      aria-label="Next Slide"
    >
      <FaArrowRight size={30} />
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow: React.FC<any> = ({ onClick }) => {
  return (
    <div
      className="absolute left-3 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer text-white"
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <FaArrowLeft size={30} />
    </div>
  );
};

export default Carousel;
