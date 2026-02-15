import productImg from "../../assets/images/products/8.webp"
function ProductShoppingCard() {
  return (
    <div className="w-full flex justify-between relative border-b-2 border-gray-200 dark:border-white/20 ">
        <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* IMG AND COUNT BTN */}
            <div className="flex w-fit flex-col">
            <img src={productImg} className="w-36" alt="" />
            <button className="flex items-center justify-between gap-x-1 rounded-lg border border-gray-200 dark:border-white/20 py-1 px-2">
                <svg className="w-4 h-4 increment text-green-600">
                <use href="#plus" />
                </svg>
                <input
                    type="number"
                    name="customInput"
                    id="customInput"
                    min={1}
                    max={20}
                    defaultValue={1}
                    className="custom-input mr-8 text-lg bg-transparent"
                />
                <svg className="w-4 h-4 decrement text-red-500">
                <use href="#minus" />
                </svg>
            </button>
            </div>
            {/* information and name product */}
            <div className="flex flex-col gap-y-4">
            <h2 className="font-DanaMedium line-clamp-1">
                لپ تاپ 15.3 اینچی اپل مدل MacBook Air MXD13 2024 LLA-M3-16GB RAM-512GB
                SSD
            </h2>
            <ul className="space-y-3 child:text-sm text-gray-400 child:flex child:items-center child:gap-x-1.5">
                <li>
                <span className="size-5 bg-blue-500 rounded-full" />
                <p>آبی</p>
                </li>
                <li>
                <svg className="w-5 h-5">
                    <use href="#shield" />
                </svg>
                <p className="mt-1">گارانتی 18 ماهه</p>
                </li>
                <li>
                <svg className="w-5 h-5">
                    <use href="#truck" />
                </svg>
                <p className="mt-1">ارسال 1 روز کاری</p>
                </li>
            </ul>
            <span className="flex items-center gap-x-1 text-gray-700 dark:text-gray-300 font-DanaMedium mt-4">
                <p className="font-DanaMedium text-xl">۱۲۵,۰۰۰,۰۰۰</p>
                <p className="text-lg">تومان</p>
            </span>
            <span className="absolute bottom-3 left-0 text-blue-500 flex sm:hidden items-center gap-x-1 text-sm cursor-pointer">
                <p className="hidden sm:flex">افزودن به خرید بعدی</p>
                <p className="flex sm:hidden">خرید بعدی</p>
                <svg className="w-4 h-4">
                <use href="#chevron-left" />
                </svg>
            </span>
            <svg className=" flex sm:hidden absolute top-0 left-0 w-5 h-5">
                <use href="#close" />
            </svg>
            </div>
        </div>
        <div className="hidden sm:flex items-end justify-between flex-col">
            <svg className="w-5 h-5 cursor-pointer">
            <use href="#x-mark" />
            </svg>
            <span className="absolute bottom-5 text-blue-500 hover:ml-2 duration-300 transition-all flex items-center gap-x-1 text-sm cursor-pointer">
            <p className="hidden md:flex">افزودن به خرید بعدی</p>
            <p className="flex md:hidden">خرید بعدی</p>
            <svg className="w-4 h-4">
                <use href="#chevron-left" />
            </svg>
            </span>
        </div>
        </div>

  )
}

export default ProductShoppingCard