import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const images = [
  '/ImageSlider/Image1.png',
  '/ImageSlider/Image2.jpg',
  '/ImageSlider/Image3.jpg',
  '/ImageSlider/Image4.png',
  '/ImageSlider/Image5.jpg',
];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    swiperRef.current?.slideToLoop(index); // Ensures correct index with loop mode
  };

  return (
    <div className="max-w-full mx-auto">
      {/* Main Swiper */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
        // navigation={true}
        autoplay={{ delay: 2800, disableOnInteraction: false }}
        modules={[Navigation, Autoplay, Thumbs]}
        className="rounded-lg overflow-hidden"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[77vh] flex items-center justify-center">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Thumbnails */}
      <div className="flex justify-center gap-8 mt-[1.7rem]">
        {images.map((src, index) => (
          <div
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`w-[60px] h-[60px] overflow-hidden rounded-md cursor-pointer border-2 ${
              activeIndex === index ? 'border-blue-500' : 'border-transparent'
            }`}
          >
            <img
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
