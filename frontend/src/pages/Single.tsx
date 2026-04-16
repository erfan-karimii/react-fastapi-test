import { useParams } from "react-router"
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {useFetch} from "../hooks/useFetch"
import type { Product } from "../components/product/type";

import Breadcrumb from "../components/filters/Breadcrumb"
import SingleSlider from "../components/slider/SingleSlider"

import img1 from "../assets/images/products/11.png"
import img2 from "../assets/images/products/12.webp"
import img3 from "../assets/images/products/13.webp"
import img4 from "../assets/images/products/14.webp"


function Single() {
    const navigate = useNavigate();
    const params = useParams()
    const { addItem } = useCart();

    const [product, productError] = useFetch<Product>(`product/${params.id}`)
    if (productError) {
        navigate("/404", { replace: true });
    }
    if (!product) {
        return "Loading ..."
    }
    return (
        <>
            <Breadcrumb />
            <section className="mt-5 flex flex-col lg:flex-row items-start gap-4 child:rounded-lg child:bg-white child:dark:bg-gray-800 child:shadow child:p-4">
                <div className="w-full lg:w-3/4">
                    <div className="flex flex-col md:flex-row justify-start gap-x-8 xl:gap-x-2 items-start">
                        <SingleSlider image={product.image_url} />
                        <div className="w-full md:w-3/4 flex flex-col gap-y-7">
                            <div className="flex items-center justify-between">
                                <a href="shop.html" className="font-DanaMedium text-sky-400">
                                    {product.name}
                                </a>
                                <div className="hidden md:flex items-center gap-x-2">
                                    <div className="tooltip">
                                        <button className="rounded-full p-1.5 app-border app-hover">
                                            <svg className="size-4 md:size-5">
                                                <use href="#share" />
                                            </svg>
                                        </button>
                                        <div className="tooltiptext">اشتراک‌گذازی</div>
                                    </div>
                                    <div className="tooltip">
                                        <button className="rounded-full p-1.5 app-border app-hover">
                                            <svg className="size-4 md:size-5">
                                                <use href="#heart" />
                                            </svg>
                                        </button>
                                        <div className="tooltiptext">علاقه مندی</div>
                                    </div>
                                    <div className="tooltip">
                                        <button className="rounded-full p-1.5 app-border app-hover">
                                            <svg className="size-4 md:size-5">
                                                <use href="#arrows-up-down" />
                                            </svg>
                                        </button>
                                        <div className="tooltiptext">مقایسه</div>
                                    </div>
                                </div>
                            </div>
                            {/* MOBILE SLIDER */}
                            <div className="flex md:hidden">
                                <div className="swiper MobileProductSlider w-full">
                                    <div className="swiper-wrapper w-full child:w-full child:overflow-hidden child:rounded-lg">
                                        <div className="swiper-slide">
                                            <img src={img1} alt="" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src={img2} alt="" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src={img3} alt="" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src={img4} alt="" />
                                        </div>
                                    </div>
                                    <div className="swiper-pagination MobileProductSlider-pagination" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <p className="text-lg font-DanaDemiBold dark:text-gray-300" dangerouslySetInnerHTML={{ __html: product.description || "" }}></p>
                                <p className="text-sm text-gray-300 dark:text-gray-500">
                                    not implemented
                                </p>
                                <div className="flex items-center gap-x-2">
                                    <span className="flex items-center gap-x-1 text-sm">
                                        <svg className="size-4 text-yellow-400 mb-1.5">
                                            <use href="#star" />
                                        </svg>
                                        4.4{" "}
                                        <span className="text-gray-300 dark:text-gray-500">
                                            (امتیاز 849 خریدار)
                                        </span>
                                    </span>
                                    <span className="h-6 bg-slate-100 text-gray-400 dark:bg-slate-700 dark:text-gray-400 flex items-center justify-center rounded-full px-2 text-xs font-DanaMedium pt-1">
                                        410 دیدگاه
                                    </span>
                                </div>
                            </div>
                            {/* COLOR */}
                            <div className="flex flex-col gap-y-4">
                                <h1 className="font-DanaDemiBold text-lg color-title dark:text-gray-200">
                                    رنگ : سبز
                                </h1>
                                <div className="flex items-center gap-x-3 child:rounded-full child:size-9 child:p-1">
                                    <button className="color-select-btn ring-4 ring-blue-400 transition-all duration-300 ease-in-out">
                                        <span className="bg-black w-full h-full rounded-full flex" />
                                    </button>
                                    <button className="color-select-btn ring-1 ring-gray-400 transition-all duration-300 ease-in-out">
                                        <span className="bg-white app-border w-full h-full rounded-full flex" />
                                    </button>
                                    <button className="color-select-btn ring-1 ring-gray-400 transition-all duration-300 ease-in-out">
                                        <span className="bg-green-400 w-full h-full rounded-full flex" />
                                    </button>
                                    <button className="color-select-btn ring-1 ring-gray-400 transition-all duration-300 ease-in-out">
                                        <span className="bg-blue-500 w-full h-full rounded-full flex" />
                                    </button>
                                </div>
                            </div>
                            {/* Features Box  */}
                            <div className="w-full flex flex-col gap-y-4">
                                <h1 className="font-DanaDemiBold text-lg dark:text-gray-200">ویژگی‌ها</h1>
                                <div className="grid grid-cols-12 gap-2 child:p-2 child:h-16 child:bg-gray-100 dark:child:bg-gray-900 child:rounded-lg child:flex child:flex-col child:gap-y-1.5">
                                    <div className="col-span-12 md:col-span-6 xl:col-span-4">
                                        <p className="text-sm text-gray-500">فناوری صفحه‌ نمایش </p>
                                        <p className="line-clamp-1 font-DanaDemiBold text-sm text-slate-800 dark:text-slate-200">
                                            LTPO Super Retina XDR
                                        </p>
                                    </div>
                                    <div className="col-span-12 md:col-span-6 xl:col-span-4">
                                        <p className="text-sm text-gray-500">نسخه سیستم عامل </p>
                                        <p className="line-clamp-1 font-DanaDemiBold text-sm text-slate-800 dark:text-slate-200">
                                            iOS 18
                                        </p>
                                    </div>
                                    <div className="col-span-12 md:col-span-6 xl:col-span-4">
                                        <p className="text-sm text-gray-500">رزولوشن دوربین اصلی </p>
                                        <p className="line-clamp-1 font-DanaDemiBold text-sm text-slate-800 dark:text-slate-200">
                                            48 مگاپیکسل
                                        </p>
                                    </div>
                                    <div className="col-span-12 md:col-span-6 xl:col-span-4">
                                        <p className="text-sm text-gray-500">اندازه</p>
                                        <p className="line-clamp-1 font-DanaDemiBold text-sm text-slate-800 dark:text-slate-200">
                                            6.1
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 lg:mr-2 grid grid-cols-12 child:col-span-6 xl:child:col-span-3 gap-x-1 gap-y-2 lg:gap-4 child:border child:text-gray-400 child:dark:border-white/20 child:border-gray-200 child:rounded-lg child:h-12  child:p-2 child:flex child:items-center child:gap-x-1 lg:child:gap-x-2 child:text-sm lg:text-base">
                        <span>
                            <svg className="w-4 h-4 lg:w-6 lg:h-6">
                                <use href="#arrow-path-rounded-square"></use>
                            </svg>
                            <p>ضمانت بازگشت کالا</p>
                        </span>
                        <span>
                            <svg className="w-4 h-4 lg:w-6 lg:h-6">
                                <use href="#check-badge"></use>
                            </svg>
                            <p>
                                تضمین اصالت کالا
                            </p>
                        </span>
                        <span>
                            <svg className="w-4 h-4 lg:w-6 lg:h-6">
                                <use href="#calender-day"></use>
                            </svg>
                            <p>پشتیبانی کل هفته</p>
                        </span>
                        <span>
                            <svg className="w-4 h-4 lg:w-6 lg:h-6">
                                <use href="#truke"></use>
                            </svg>
                            <p>ارسال به سراسر ایران </p>
                        </span>
                    </div>
                </div>
                <div className="w-full lg:w-1/4 lg:sticky top-5 flex flex-col gap-y-6">
                    {/* PRICE */}
                    <div className="flex items-center gap-x-1">
                        <p className="text-2xl font-DanaDemiBold">{product.price}</p>
                        <p className="">تومان</p>
                    </div>
                    <button className="w-full flex items-center justify-between gap-x-1 rounded-lg border border-gray-200 dark:border-white/20 py-2 px-3">
                        <svg className="w-6 h-6 increment text-green-600">
                            <use href="#plus" />
                        </svg>
                        <input
                            type="number"
                            name="customInput"
                            id="customInput"
                            min={1}
                            max={20}
                            defaultValue={1}
                            className="custom-input mr-4 text-lg bg-transparent"
                        />
                        <svg className="w-6 h-6 decrement text-red-500">
                            <use href="#minus" />
                        </svg>
                    </button>
                    <button className="w-full flex items-center gap-x-1 justify-between dark:bg-gray-900 dark:text-gray-400  bg-gray-100 transition-all rounded-lg py-2 px-2 xl:px-3 font-DanaMedium text-sm xl:text-base">
                        <p>مجموع خرید :</p>
                        <p>{product.price} تومان</p>
                    </button>
                    <div className="relative overflow-hidden text-sm font-DanaDemiBold text-right">
                        <div id="slider-text" className="transition-all duration-700 ease-in-out">
                            <p>🔥 ۱۰۰۰+ فروش در هفته گذشته</p>
                        </div>
                    </div>
                    <button 
                        className="w-full flex items-center gap-x-1 justify-center bg-blue-500 text-white hover:bg-blue-600 transition-all rounded-lg shadow py-2"
                        onClick={() => (addItem({
                            id: product.id,
                            image: product.image_url?product.image_url:"",
                            title: product.name,
                            price: product.price,
                        }), navigate("/cart", { replace: true }))}
                    >
                        افزودن به سبد
                        <svg className="w-5 h-5">
                            <use href="#shopping-bag" />
                        </svg>
                    </button>
                    <div className="text-sm  text-gray-400 flex xl:items-center gap-x-1">
                        <svg className="w-5 h-5">
                            <use href="#info" />
                        </svg>
                        <p>ارسال رایگان برای خریدهای بالای 400 هزار تومان</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Single