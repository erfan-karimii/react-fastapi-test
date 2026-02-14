import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type Slide = {
  id: number;
  image: string;
  title?: string;
};
interface ImageSliderProps {
  slides: Slide[];
  
}


export default function ImageSlider({ slides }: ImageSliderProps) {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[ Pagination, Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop
      className="w-full h-[400px]"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full h-full ">
            <img
              src={slide.image}
              alt={slide.title ?? "slide image"}
              className="w-full h-full  rounded-xl"
            />

            {slide.title && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <h2 className="text-white text-3xl font-bold">
                  {slide.title}
                </h2>
              </div>
            )}
          </div>
        </SwiperSlide>
        
        
      ))}
    </Swiper>
  );
}
