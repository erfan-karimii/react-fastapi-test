
function MobileFilters() {
  return (
    <div className="flex lg:hidden items-center gap-x-2">
        {/* SORT BTN */}
        <button className="sort-modal-open text-sm mb-4 py-1.5 px-3 app-border rounded-full flex items-center gap-x-1">
            <svg className="size-4 text-gray-400">
            <use href="#sort-list" />
            </svg>
            <p>مرتبط ترین</p>
        </button>
        {/* SORT MODAL */}
        <div className="sort-modal">
            <div className="flex justify-between sort-modal-close">
            <p>مرتب سازی بر اساس </p>
            <svg className="size-5 text-gray-800 dark:text-gray-300">
                <use href="#x-mark" />
            </svg>
            </div>
            <ul className="flex w-full child:w-full child:text-center flex-col items-center justify-center divide-y divide-gray-300 dark:divide-gray-200/20 child:py-3">
            <li>مرتبط‌ترین</li>
            <li>پربازدیدترین</li>
            <li>جدیدترین</li>
            <li>گران‌ترین</li>
            <li>منتخب</li>
            <li>پیشنهاد خریداران</li>
            <li>سریع‌ترین ارسال</li>
            </ul>
        </div>
        {/* FILTER BTN */}
        <button className="filter-modal-open text-sm mb-4 py-1.5 px-3 app-border rounded-full flex items-center gap-x-1">
            <svg className="size-4 text-gray-400">
            <use href="#filter" />
            </svg>
            <p>فیلتر</p>
        </button>
        {/* Filter MODAL */}
        <div className="filter-modal">
            <div className="flex justify-between filter-modal-close">
            <p>فیلتر</p>
            <svg className="size-5 text-gray-800 dark:text-gray-300">
                <use href="#x-mark" />
            </svg>
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
                id="content-3"
                className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
                >
                <div className="pb-3 text-gray-700 dark:text-gray-300 w-full flex flex-col gap-y-1.5">
                    {/* item */}
                    <div className="inline-flex items-center mr-2.5 mt-1">
                    <label
                        className="relative flex cursor-pointer items-center rounded-full p-3"
                        htmlFor="ripple-5"
                        data-ripple-dark="true"
                    >
                        <input
                        id="ripple-5"
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
                        htmlFor="ripple-5"
                    >
                        همه کالاها
                    </label>
                    </div>
                    {/* item */}
                    <div className="inline-flex items-center mr-2.5">
                    <label
                        className="relative flex cursor-pointer items-center rounded-full p-3"
                        htmlFor="ripple-6"
                        data-ripple-dark="true"
                    >
                        <input
                        id="ripple-6"
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
                        htmlFor="ripple-6"
                    >
                        موبایل
                    </label>
                    </div>
                    {/* item */}
                    <div className="inline-flex items-center mr-2.5">
                    <label
                        className="relative flex cursor-pointer items-center rounded-full p-3"
                        htmlFor="ripple-7"
                        data-ripple-dark="true"
                    >
                        <input
                        id="ripple-7"
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
                        htmlFor="ripple-7"
                    >
                        لپ تاپ
                    </label>
                    </div>
                    {/* item */}
                    <div className="inline-flex items-center mr-2.5">
                    <label
                        className="relative flex cursor-pointer items-center rounded-full p-3"
                        htmlFor="ripple-8"
                        data-ripple-dark="true"
                    >
                        <input
                        id="ripple-8"
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
                        htmlFor="ripple-8"
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
                htmlFor="hs-valid-toggle-switch5"
                className="relative inline-block w-11 h-6 cursor-pointer"
                >
                <input
                    type="checkbox"
                    id="hs-valid-toggle-switch5"
                    className="peer sr-only"
                />
                <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-500 dark:bg-neutral-700 dark:peer-checked:bg-blue-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
                <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white" />
                </label>
                <label
                htmlFor="hs-valid-toggle-switch5"
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
                htmlFor="hs-valid-toggle-switch6"
                className="relative inline-block w-11 h-6 cursor-pointer"
                >
                <input
                    type="checkbox"
                    id="hs-valid-toggle-switch6"
                    className="peer sr-only"
                />
                <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-500 dark:bg-neutral-700 dark:peer-checked:bg-blue-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
                <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white" />
                </label>
                <label
                htmlFor="hs-valid-toggle-switch6"
                className="text-gray-800 dark:text-gray-100 flex items-center gap-x-2"
                >
                <img className="size-5" src="images/svg/time.png" alt="" />
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
                id="content-4"
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
                htmlFor="hs-valid-toggle-switch7"
                className="relative inline-block w-11 h-6 cursor-pointer"
                >
                <input
                    type="checkbox"
                    id="hs-valid-toggle-switch7"
                    className="peer sr-only"
                />
                <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-500 dark:bg-neutral-700 dark:peer-checked:bg-blue-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
                <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white" />
                </label>
                <label
                htmlFor="hs-valid-toggle-switch7"
                className="text-gray-800 dark:text-gray-100 flex items-center gap-x-2"
                >
                <img className="size-5" src="images/svg/Seller.svg" alt="" />
                ارسال فروشنده
                </label>
            </div>
            {/* TOGGLE SWITCH */}
            <div
                className="w-full justify-between flex items-center gap-x-3 px-2 xl:px-4 py-4"
                dir="ltr"
            >
                <label
                htmlFor="hs-valid-toggle-switch8"
                className="relative inline-block w-11 h-6 cursor-pointer"
                >
                <input
                    type="checkbox"
                    id="hs-valid-toggle-switch8"
                    className="peer sr-only"
                />
                <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-500 dark:bg-neutral-700 dark:peer-checked:bg-blue-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
                <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white" />
                </label>
                <label
                htmlFor="hs-valid-toggle-switch8"
                className="text-gray-800 dark:text-gray-100 flex items-center gap-x-1"
                >
                <img className="size-5" src="images/svg/shop.png" alt="" />
                خرید حضوری در تهران
                </label>
            </div>
            </div>
        </div>
        <span className="text-sm text-gray-400 ms-auto py-1.5 px-4">
            ۱3,۰۴۰ کالا{" "}
        </span>
    </div>
  )
}

export default MobileFilters