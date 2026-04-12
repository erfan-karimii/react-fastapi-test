function SingleSlider() {
  return (
    <>
        <div className="w-2/4 hidden md:flex flex-col justify-center items-center gap-y-4">
            <span className="open-sliderModal">
            <img
                src="images/products/11.png"
                className="cursor-pointer object-cover"
                alt=""
            />
            </span>
            <div className="grid grid-cols-12 child:col-span-3 child:app-border gap-x-4 child:size-16 child:rounded-lg child:cursor-pointer">
            <div className="p-1 open-sliderModal">
                <img
                src="images/products/11.png"
                className="object-cover  rounded-lg"
                />
            </div>
            <div className="p-1 open-sliderModal">
                <img
                src="images/products/12.webp"
                className="object-cover  rounded-lg"
                />
            </div>
            <div className="p-1 open-sliderModal">
                <img
                src="images/products/13.webp"
                className="object-cover  rounded-lg"
                />
            </div>
            <div className="overflow-hidden relative open-sliderModal">
                <svg className="absolute size-8 text-gray-100 top-4 left-4 z-10">
                <use href="#ellipsis" />
                </svg>
                <img
                src="images/products/14.webp"
                className="object-cover rounded-lg blur-sm"
                />
            </div>
            </div>
        </div>
        <div className="slider-modal">
            <div className="flex w-full h-fit items-center justify-between">
            <h1 className="font-DanaMedium text-lg">
                تصاویر گوشی موبایل اپل مدل iPhone 16 دو سیم کارت
            </h1>
            <svg className="size-6 cursor-pointer close-sliderModal">
                <use href="#x-mark" />
            </svg>
            </div>
            <div className="swiper ProductDetailsSlider mt-14 px-10 w-96 relative">
            <div className="swiper-wrapper w-[50%] child:w-full child:rounded-lg child:overflow-hidden">
                <div className="swiper-slide">
                <img src="images/products/11.png" alt="" />
                </div>
                <div className="swiper-slide">
                <img src="images/products/12.webp" alt="" />
                </div>
                <div className="swiper-slide">
                <img src="images/products/13.webp" alt="" />
                </div>
                <div className="swiper-slide">
                <img src="images/products/14.webp" alt="" />
                </div>
            </div>
            </div>
            <button className="slider-navigate_btn absolute right-40 top-[17rem] border dark:border-gray-700 border-gray-200 button-prev-ProductDetailsSlider z-20">
            <svg className="size-6 -rotate-90">
                <use href="#chevron" />
            </svg>
            </button>
            <button className="slider-navigate_btn absolute left-40 top-[17rem] border dark:border-gray-700 border-gray-200 button-next-ProductDetailsSlider z-10">
            <svg className="size-6 rotate-90">
                <use href="#chevron" />
            </svg>
            </button>
        </div>
    </>

  )
}

export default SingleSlider