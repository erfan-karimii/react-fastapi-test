import Sidebar from "../components/dashboard/Sidebar"
import { useFetch } from "../hooks/useFetch"

function Dashboard() {
    const [data,useData] = useFetch("/")
    console.log(data,useData)
    return (
        <div className="flex flex-col lg:flex-row gap-x-8 mt-10">
            <Sidebar/>
            <div className="lg:w-3/4 px-3 md:px-0">
                <div className="flex lg:hidden">
                    <button className="open-user-menu bg-blue-500 flex items-center gap-x-1 font-DanaMedium text-white p-2 rounded-lg text-sm mr-2">
                        <svg className="size-5">
                            <use href="#bars-3" />
                        </svg>
                        منوی کاربری
                    </button>
                    <div className="user-menu">
                            <button className="close-user-menu">
                            <svg className="size-6">
                            <use href="#x-mark" />
                            </svg>
                            </button>
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
                </div>
                <div className="grid grid-cols-12 child:col-span-12 mt-5 lg:mt-0 md:child:col-span-4 gap-4 child:rounded-lg child:bg-white child:dark:bg-gray-800 child:w-full child:flex
                child:shadow child:p-4">
                    <div className="flex items-center gap-x-4">
                        <svg className="size-9 text-blue-500">
                                <use href="#wallet" />
                        </svg>
                        <div className="flex flex-col gap-y-1">
                            <h2 className="font-DanaDemiBold">کیف‌پول</h2>
                            <p className="text-gray-500">موجودی : <span>0 تومان</span></p>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <svg className="size-9 text-blue-500">
                                <use href="#shopping-bag" />
                        </svg>
                        <div className="flex flex-col gap-y-1">
                            <h2 className="font-DanaDemiBold">سفارش‌ها</h2>
                            <p className="text-gray-500">10 سفارش</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <svg className="size-9 text-blue-500">
                                <use href="#ticket" />
                        </svg>
                        <div className="flex flex-col gap-y-1">
                            <h2 className="font-DanaDemiBold">تیکت‌ها</h2>
                            <p className="text-gray-500">5 تیکت</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col shadow rounded-lg p-4 dark:bg-gray-800 bg-white mt-5">
                    <span className="flex items-center gap-x-2">
                        <img src="images/svg/status-delivered.svg" className="w-10" alt=""/>
                        <h2 className="font-DanaMedium text-lg">سفارش های اخیر :</h2>
                    </span>
                    <div className="relative mt-5 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                        <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700  bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
                                    <tr>
                                        <th scope="col" className="px-6 py-3.5">
                                                نام محصول
                                        </th>
                                            <th scope="col" className="px-6 py-3.5">
                                                تاریخ
                                        </th>
                                        <th scope="col" className="px-6 py-3.5">
                                                قیمت
                                        </th>
                                        <th scope="col" className="px-6 py-3.5">
                                                وضعیت
                                        </th>
                                    </tr>
                            </thead>
                                <tbody>
                                    <tr className="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                                        <th scope="row"
                                            className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-x-2">
                                                <img className="w-10 object-cover" src="images/products/11.png" alt=""/>
                                                گوشی موبایل اپل مدل iPhone 16
                                        </th>
                                        <td className="px-6 py-5">
                                                    1402/11/11
                                        </td>
                                        <td className="px-6 py-5">
                                                    62,000,000 تومان
                                        </td>
                                        <td className="px-6 py-5 text-red-500 font-DanaDemiBold">
                                                    لغو شده
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                                        <th scope="row"
                                            className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-x-2">
                                                <img className="w-10 object-cover" src="images/products/8.webp" alt=""/>
                                                گوشی موبایل اپل مدل iPhone 16
                                        </th>
                                        <td className="px-6 py-5">
                                                    1402/11/11
                                        </td>
                                        <td className="px-6 py-5">
                                                    62,000,000 تومان
                                        </td>
                                        <td className="px-6 py-5 text-yellow-500 font-DanaDemiBold">
                                            درانتظار پرداخت
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                                        <th scope="row"
                                            className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-x-2">
                                                <img className="w-10 object-cover" src="images/products/3.png" alt=""/>
                                                گوشی موبایل اپل مدل iPhone 16
                                        </th>
                                        <td className="px-6 py-5">
                                                    1402/11/11
                                        </td>
                                        <td className="px-6 py-5">
                                                    62,000,000 تومان
                                        </td>
                                        <td className="px-6 py-5 text-green-500 font-DanaDemiBold">
                                            پرداخت شده
                                        </td>
                                    </tr>
                                </tbody>
                        </table>
                    </div>
                </div>
                <div className="w-full flex flex-col shadow rounded-lg p-4 dark:bg-gray-800 bg-white mt-5 mb-8">
                    <div className="flex items-center justify-between">
                        <span className="flex items-center gap-x-2">
                            <img src="images/svg/map.png" className="w-8" alt=""/>
                            <h2 className="font-DanaMedium text-lg"> آدرس های من:</h2>
                        </span>
                        <a href="#" className="flex items-center gap-x-1 text-blue-500">
                            <svg className="size-5  ">
                                <use href="#plus"></use>
                            </svg>
                            <h2 className="font-DanaMedium">آدرس جدید</h2>
                        </a>
                    </div>
                    <ul className="mt-5 space-y-3">
                        <li className="w-full border border-blue-300 dark:border-blue-400 p-4 rounded-lg">
                            <span className="flex items-center gap-x-1 text-blue-500 dark:text-blue-400">
                                <svg className="size-6">
                                <use href="#map"></use>
                                </svg>
                                <h2 className="font-DanaMedium">نام آدرس</h2>
                            </span>
                            <div className="space-y-1.5 text-gray-600 dark:text-gray-300 mt-3 mr-2">
                                <p>استان تهران-بلوار آزادی، خیابان استاد معین، کوچه گلستان، پلاک ۱۰ </p>
                            <p>کد پستی: 000000000</p>
                            <p>گیرنده: پارسا وصالی | ۰۹000000000</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dashboard