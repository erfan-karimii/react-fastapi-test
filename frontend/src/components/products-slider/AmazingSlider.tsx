import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { CountdownTimer } from "./CountdownTimer";
import AmazingImg from '../../assets/images/slider/Amazings.svg'

import "./slider.css"

function AmazingSlider() {
    const sliderData = [
        { id: 1, title: 'Slide 1', image: 'https://placehold.co/300x200?text=Slide+1' },
        { id: 2, title: 'Slide 2', image: 'https://placehold.co/300x200?text=Slide+2' },
        { id: 3, title: 'Slide 3', image: 'https://placehold.co/300x200?text=Slide+3' },
        { id: 4, title: 'Slide 4', image: 'https://placehold.co/300x200?text=Slide+4' },
        { id: 5, title: 'Slide 5', image: 'https://placehold.co/300x200?text=Slide+5' },
        { id: 6, title: 'Slide 6', image: 'https://placehold.co/300x200?text=Slide+6' },
        { id: 7, title: 'Slide 7', image: 'https://placehold.co/300x200?text=Slide+7' },
        { id: 8, title: 'Slide 8', image: 'https://placehold.co/300x200?text=Slide+8' },
    ]
  return (
    <div className="w-full h-80 rounded-xl bg-blue-500 dark:bg-blue-700 p-4 relative amazing-slider">
        <Swiper
            dir='rtl'
            slidesPerView={'auto'}
            spaceBetween={10}
            pagination={{
            clickable: true,
            }}
            className="mySwiper"
            navigation={true} 
            modules={[Navigation]} 
        >
            <SwiperSlide className='w-auto'>
                <div className="flex flex-col gap-3 items-center justify-center">
                    <img src={AmazingImg} alt="پیشنهاد شگفت انگیز" className="w-28 h-28 object-cover rounded-lg" />
                    <CountdownTimer initialSeconds={3600} />
                </div>
            </SwiperSlide>
            {sliderData.map((slide) => (
            <SwiperSlide key={slide.id} className='w-auto'>
                <div className="h-72 w-56 bg-white rounded-lg flex flex-col items-center justify-center">
                    <div className="w-full flex items-center justify-between">
                        <span className="flex items-center gap-x-0.5 text-blue-400">
                            <svg className="size-4 mb-1">
                            <use href="#rocket" />
                            </svg>
                            <p className="text-xs">ارسال امروز</p>
                        </span>
                        <span className="text-gray-400 flex items-center justify-end text-sm gap-x-0.5">
                            <p> 5.0 </p>
                            <svg className="size-4 mb-1">
                            <use href="#star" />
                            </svg>
                        </span>
                    </div>

                        <img src={slide.image} alt={slide.title} className="w-48 h-28  rounded-lg" />
                    <div className="space-y-2">
                        <a href="product-details.html" className="w-36  block" style={{fontSize: 'smaller'}}>
                            لپ تاپ 15.6 اینچی ایسوس مدل Vivobook15 X515MA-BR001-Celeron N4020-8GB DDR4
                        </a>
                        {/* Rate and Price */}
                        <div className="w-24">
                            {/* Price */}
                            <div className="justify-between">
                            <span className="pt-1">70%</span>
                            <h4 className="flex items-center gap-x-1 text-lg">
                                130,000,000 <p className="text-xs font-DanaMedium">تومان</p>
                            </h4>
                            </div>
                        </div>
                    </div>
                </div>

            </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default AmazingSlider