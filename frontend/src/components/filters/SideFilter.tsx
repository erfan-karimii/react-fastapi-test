import img1 from "../../assets/images/svg/Seller.svg"
import img2 from "../../assets/images/svg/time.png"
import img3 from "../../assets/images/svg/shop.png"



function SideFilter() {
  return (
    <div className="lg:sticky top-1 h-fit lg:w-1/4 hidden lg:flex flex-col gap-y-4 items-center shadow rounded-lg py-4 dark:bg-gray-800 bg-white">
        {/* TITLE */}
        <div className="flex items-center justify-between w-full px-2 xl:px-4">
            <span className="flex items-center gap-x-1">
            <p className="font-DanaMedium text-gray-700 dark:text-gray-200 text-lg">
                فیلترها
            </p>
            </span>
            <p className="text-blue-500 dark:text-blue-400 text-sm cursor-pointer">
            {" "}
            حذف فیلتر‌ها
            </p>
        </div>
        {/* FILTERS */}
        <div className="w-full divide-y divide-slate-200 dark:divide-gray-700/20">
            {/* Accordion */}
            <div className="">
            <button
                className="w-full flex justify-between items-center px-2 xl:px-4 pt-4 mb-4 text-gray-800 dark:text-gray-100"
            >
                <span>دسته بندی </span>
                <span id="icon-1" className="text-gray-800 dark:text-gray-100">
                <svg className="size-4 transition-transform duration-300">
                    <use href="#chevron-left" />
                </svg>
                </span>
            </button>
            <div
                id="content-1"
                className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
                <div className="pb-3 text-gray-700 dark:text-gray-300 w-full flex flex-col gap-y-1.5">
                {/* item */}
                <div className="inline-flex items-center mr-2.5 mt-1">
                    <label
                    className="relative flex cursor-pointer items-center rounded-full p-3"
                    htmlFor="ripple-on"
                    data-ripple-dark="true"
                    >
                    <input
                        id="ripple-on"
                        type="checkbox"
                        className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-slate-400 hover:before:opacity-10 dark:bg-gray-600 dark:checked:bg-blue-500 darKchecked:bg-blue-500  "
                    />
                    <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth={1}
                        >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                        </svg>
                    </span>
                    </label>
                    <label
                    className="cursor-pointer text-gray-800 dark:text-gray-400 mr-1"
                    htmlFor="ripple-on"
                    >
                    همه کالاها
                    </label>
                </div>
                {/* item */}
                <div className="inline-flex items-center mr-2.5">
                    <label
                    className="relative flex cursor-pointer items-center rounded-full p-3"
                    htmlFor="ripple-2"
                    data-ripple-dark="true"
                    >
                    <input
                        id="ripple-2"
                        type="checkbox"
                        className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-slate-400 hover:before:opacity-10 dark:bg-gray-600 dark:checked:bg-blue-500 darKchecked:bg-blue-500  "
                    />
                    <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth={1}
                        >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                        </svg>
                    </span>
                    </label>
                    <label
                    className="cursor-pointer text-gray-800 dark:text-gray-400 mr-1"
                    htmlFor="ripple-2"
                    >
                    موبایل
                    </label>
                </div>
                {/* item */}
                <div className="inline-flex items-center mr-2.5">
                    <label
                    className="relative flex cursor-pointer items-center rounded-full p-3"
                    htmlFor="ripple-3"
                    data-ripple-dark="true"
                    >
                    <input
                        id="ripple-3"
                        type="checkbox"
                        className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-slate-400 hover:before:opacity-10 dark:bg-gray-600 dark:checked:bg-blue-500 darKchecked:bg-blue-500  "
                    />
                    <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth={1}
                        >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                        </svg>
                    </span>
                    </label>
                    <label
                    className="cursor-pointer text-gray-800 dark:text-gray-400 mr-1"
                    htmlFor="ripple-3"
                    >
                    لپ تاپ
                    </label>
                </div>
                {/* item */}
                <div className="inline-flex items-center mr-2.5">
                    <label
                    className="relative flex cursor-pointer items-center rounded-full p-3"
                    htmlFor="ripple-4"
                    data-ripple-dark="true"
                    >
                    <input
                        id="ripple-4"
                        type="checkbox"
                        className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-slate-400 hover:before:opacity-10 dark:bg-gray-600 dark:checked:bg-blue-500 darKchecked:bg-blue-500  "
                    />
                    <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth={1}
                        >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                        </svg>
                    </span>
                    </label>
                    <label
                    className="cursor-pointer text-gray-800 dark:text-gray-400 mr-1"
                    htmlFor="ripple-4"
                    >
                    هدفون، هدست
                    </label>
                </div>
                </div>
            </div>
            </div>
            {/* TOGGLE SWITCH */}
            <div
            className="w-full justify-between flex items-center gap-x-3 px-2 xl:px-4 py-4"
            dir="ltr"
            >
            <label
                htmlFor="hs-valid-toggle-switch"
                className="relative inline-block w-11 h-6 cursor-pointer"
            >
                <input
                type="checkbox"
                id="hs-valid-toggle-switch"
                className="peer sr-only"
                />
                <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-500 dark:bg-neutral-700 dark:peer-checked:bg-blue-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
                <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white" />
            </label>
            <label
                htmlFor="hs-valid-toggle-switch"
                className="text-gray-800 dark:text-gray-100"
            >
                فقط کالا های موجود
            </label>
            </div>
            {/* TOGGLE SWITCH */}
            <div
            className="w-full justify-between flex items-center gap-x-3 py-4 px-2 xl:px-4"
            dir="ltr"
            >
            <label
                htmlFor="hs-valid-toggle-switch2"
                className="relative inline-block w-11 h-6 cursor-pointer"
            >
                <input
                type="checkbox"
                id="hs-valid-toggle-switch2"
                className="peer sr-only"
                />
                <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-500 dark:bg-neutral-700 dark:peer-checked:bg-blue-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
                <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white" />
            </label>
            <label
                htmlFor="hs-valid-toggle-switch2"
                className="text-gray-800 dark:text-gray-100 flex items-center gap-x-2"
            >
                <img className="size-5" src={img2} alt="" />
                ارسال امروز
            </label>
            </div>
            {/* Accordion */}
            <div className="">
            <button
                className="w-full flex justify-between items-center px-2 xl:px-4 py-4 text-gray-800 dark:text-gray-100"
            >
                <span>محدوده قیمت</span>
                <span id="icon-1" className="text-gray-800 dark:text-gray-100">
                <svg className="size-4 transition-transform duration-300">
                    <use href="#chevron-left" />
                </svg>
                </span>
            </button>
            <div
                id="content-2"
                className="price-slider max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
                <div className="pb-3 text-gray-700 dark:text-gray-300 w-full px-4">
                <div className="wrapper mt-5">
                    <div className="slider-bar">
                    <div className="progress" />
                    </div>
                    <div className="range-input">
                    <input
                        type="range"
                        min={0}
                        max={100000}
                        defaultValue={0}
                        className="min-range"
                    />
                    <input
                        type="range"
                        min={0}
                        max={100000}
                        defaultValue={35000}
                        className="max-range"
                    />
                    </div>
                    <div className="price-input mt-4 text-gray-800 dark:text-gray-500">
                    <div className="field justify-start">
                        <span className="text-sm font-DanaMedium mr-2">تومان</span>
                        <p className="min-input">0</p>
                    </div>
                    <div className="field justify-end">
                        <span className="text-sm font-DanaMedium mr-2">تومان</span>
                        <p className="max-input">350,000</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* TOGGLE SWITCH */}
            <div
            className="w-full justify-between flex items-center gap-x-3 px-2 xl:px-4 py-4"
            dir="ltr"
            >
            <label
                htmlFor="hs-valid-toggle-switch3"
                className="relative inline-block w-11 h-6 cursor-pointer"
            >
                <input
                type="checkbox"
                id="hs-valid-toggle-switch3"
                className="peer sr-only"
                />
                <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-500 dark:bg-neutral-700 dark:peer-checked:bg-blue-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
                <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white" />
            </label>
            <label
                htmlFor="hs-valid-toggle-switch3"
                className="text-gray-800 dark:text-gray-100 flex items-center gap-x-2"
            >
                <img className="size-5" src={img1} alt="" />
                ارسال فروشنده
            </label>
            </div>
            {/* TOGGLE SWITCH */}
            <div
            className="w-full justify-between flex items-center gap-x-3 px-2 xl:px-4 py-4"
            dir="ltr"
            >
            <label
                htmlFor="hs-valid-toggle-switch4"
                className="relative inline-block w-11 h-6 cursor-pointer"
            >
                <input
                type="checkbox"
                id="hs-valid-toggle-switch4"
                className="peer sr-only"
                />
                <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-500 dark:bg-neutral-700 dark:peer-checked:bg-blue-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
                <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white" />
            </label>
            <label
                htmlFor="hs-valid-toggle-switch4"
                className="text-gray-800 dark:text-gray-100 flex items-center gap-x-1"
            >
                <img className="size-5" src={img3} alt="" />
                خرید حضوری در تهران
            </label>
            </div>
        </div>
    </div>
  )
}

export default SideFilter