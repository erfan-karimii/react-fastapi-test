import { useEffect , useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { CountdownTimer } from "./CountdownTimer";

import { env } from "../../config/env";
import AmazingImg from '../../assets/images/slider/Amazings.svg'

import "./slider.css"

interface Products {
    id: number;
    name: string;
    price: number;
    description?: string;
    is_amazing?: boolean;
    image_url: string;
}

function AmazingSlider() {
    const [amazingProducts, setAmazingProducts] = useState<Products[]>([]);

    useEffect(() => {
        const fetchamazingProducts = async () => {
            try {
                const response = await fetch(`${env.apiBaseUrl}/products/amazing`);
                if (!response.ok) {
                    throw new Error("Failed to fetch amazing products");
                }
                const data = await response.json();
                setAmazingProducts(data);
            } catch (error) {
                console.error("Error fetching amazing products:", error);
            }
        };
        fetchamazingProducts();
    }, [])

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
                    <img src={AmazingImg} alt="پیشنهاد شگفت انگیز" className="w-28 h-28 object-cover rounded-lg"  loading="lazy"/>
                    <CountdownTimer initialSeconds={3600}/>
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </div>
            </SwiperSlide>
            {amazingProducts.map((product) => (
            <SwiperSlide key={product.id} className='w-auto'>
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>

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

                    <img src={product.image_url} alt={product.name} className="w-48 h-28  rounded-lg" />
                    <div className="space-y-2">
                        <a href="#" className="w-36 block" style={{fontSize: 'smaller'}}>
                            {product.name}
                        </a>
                        {/* Rate and Price */}
                        <div className="w-24">
                            {/* Price */}
                            <div className="justify-between">
                            <h4 className="flex items-center gap-x-1 text-lg">
                                {product.price.toLocaleString()} <p className="text-xs font-DanaMedium">تومان</p>
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