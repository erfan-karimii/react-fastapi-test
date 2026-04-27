function Sidebar() {
  return (
        <div className="lg:sticky mb-8 top-1 h-fit lg:w-1/4 hidden lg:flex flex-col gap-y-4 items-center shadow rounded-lg p-4 dark:bg-gray-800 bg-white">
            <div className="w-full flex items-center justify-between border-b border-gray-200 dark:border-white/20 py-3">
                <div className="flex items-center gap-x-3">
                    <img src="images/svg/user.png" className="size-10 ring-2 ring-gray-400/20 rounded-full"
                        alt="AVATAR"/>
                    <span className="felx flex-col gap-y-2">
                        <p className="font-DanaMedium text-lg">پارسا وصالی</p>
                        <p className="text-gray-400">09100000001</p>
                    </span>
                </div>
                <span>
                    <svg className="w-6 h-6 cursor-pointer text-blue-500">
                        <use href="#edit"></use>
                    </svg>
                </span>
            </div> 
            <ul
                className="w-full relative space-y-2 child:duration-300 child:transition-all child:py-3  child:px-2 child:flex child:gap-x-2 text-lg child:cursor-pointer child:rounded-lg">
                <li className="bg-blue-500/10 text-blue-500">
                    <svg className="w-6 h-6 ">
                        <use href="#squares"></use>
                    </svg>
                    <a href="dashboard.html">داشبورد</a>
                </li>
                <li className="hover:text-blue-500">
                    <svg className="w-6 h-6 ">
                        <use href="#shopping-bag"></use>
                    </svg>
                    <a href="dashboard-orders.html">
                        سفارش ها
                    </a>
                </li>
                <li className="hover:text-blue-500">
                    <svg className="w-6 h-6 ">
                        <use href="#heart"></use>
                    </svg>
                    <a href="dashboard-favorite.html">علاقه‌مندی ها</a>
                </li>
                <li className="hover:text-blue-500">
                    <svg className="w-6 h-6 ">
                        <use href="#map"></use>
                    </svg>
                    <a href="dashboard-address.html">آدرس ها</a>
                </li>
                <li className="hover:text-blue-500">
                    <svg className="w-6 h-6 ">
                        <use href="#bell"></use>
                    </svg>
                    <a href="dashboard-messages.html">پیام ها</a>
                </li>
                <li className="hover:text-blue-500">
                    <svg className="w-6 h-6 ">
                        <use href="#cog"></use>
                    </svg>
                    <a href="dashboard-account.html">اطلاعات حساب </a>
                </li>
                <li className="text-red-400">
                    <svg className="w-6 h-6 ">
                        <use href="#arrow-left-end"></use>
                    </svg>
                    <a href="main.html">خروج</a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar