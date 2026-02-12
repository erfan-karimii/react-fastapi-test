import { useEffect , useState } from "react";

type NavbarItem = {
  name: string;
  subnav?: string[];
};

export default function Header() {
  const [navbarData, setNavigation] = useState<NavbarItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNavigation = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/navigation", {
          method: "GET",
          headers: {
            "Accept": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        setNavigation(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown error occurred");
      }
      } finally {
        setLoading(false);
      }
    };

    fetchNavigation();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <header className="header">
      {/* Desktop */}
      <div className="container mt-5 hidden flex-col gap-y-6 lg:flex">
        {/* TOPBAR */}
        <div className="flex-between">
          {/* Search Box */}
          <div className="relative z-20">
            {/* INPUT */}
            <div className="search-btn-open flex gap-x-2 app-border bg-gray-50 dark:bg-gray-700 p-1 rounded-full cursor-pointer ring-blue-400 w-84 transition-all">
              <svg className="size-6 p-1.5 flex-center text-gray-100 bg-blue-600 rounded-full w-9 h-9">
                <use href="#search" />
              </svg>
              <input placeholder="جستجو در کارین..." type="text" />
            </div>
            {/* Search Modal */}
            <div className="search-modal space-y-4">
              {/* Result */}
              <div>
                <span className="flex items-center text-sm gap-x-1 text-gray-600 dark:text-gray-200">
                  <p>
                    نتیجه جستجو :{" "}
                    <span className="font-DanaMedium text-blue-400">iphone</span>
                  </p>
                </span>
                <ul className="pt-4 text-gray-500 dark:text-gray-300 flex flex-col gap-y-4 child:flex-between child:cursor-pointer">
                  <li>
                    <a href="#" className="flex items-center gap-x-2">
                      <svg className="size-5">
                        <use href="#search" />
                      </svg>
                      آیفون 14
                    </a>
                    <svg className="size-4">
                      <use href="#arrow-up-right" />
                    </svg>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-x-2">
                      <svg className="size-5">
                        <use href="#search" />
                      </svg>
                      قاب آیفون
                    </a>
                    <svg className="size-4">
                      <use href="#arrow-up-right" />
                    </svg>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-x-2">
                      <svg className="size-5">
                        <use href="#search" />
                      </svg>
                      کاور ایفون 16
                    </a>
                    <svg className="size-4">
                      <use href="#arrow-up-right" />
                    </svg>
                  </li>
                </ul>
              </div>
              {/* Trend */}
              <div className="pt-4">
                <span className="flex items-center gap-x-1 text-sm text-gray-500 dark:text-gray-200">
                  <svg className="size-4">
                    <use href="#fire" />
                  </svg>
                  <p>جستجو های پرطرفدار :</p>
                </span>
                <ul className="w-full flex items-center gap-1.5 mt-3 child:search-modal-list-item">
                  <li>
                    <a href="#">#آیفون</a>
                  </li>
                  <li>
                    <a href="#">#لپ تاپ</a>
                  </li>
                  <li>
                    <a href="#">#هدفون</a>
                  </li>
                  <li>
                    <a href="#">#هلدر</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Logo */}
          <a href="main.html" className="flex flex-col text-center ml-20">
            <span className="font-MorabbaMedium text-4xl flex items-center">
              <span className="text-blue-500">کارین</span> شاپ
            </span>
            <p className="font-DanaMedium text-gray-400"> خرید موبایل و لپ‌تاپ</p>
          </a>
          {/*  Action */}
          <div className="flex items-center gap-x-3">
            {/* LOGIN */}
            <button className="hidden flex-center py-2 px-4  app-border rounded-full app-hover">
              <a href="#" className="flex items-center gap-x-2">
                <p>ورود | ثبت‌نام</p>
                <svg className="size-5">
                  <use href="#arrow-left-end" />
                </svg>
              </a>
            </button>
            {/* Account Btn */}
            <button className="group relative flex-center py-2 px-4 app-border rounded-full app-hover delay-75">
              <a href="dashboard.html" className="flex items-center gap-x-1">
                <svg className="size-5">
                  <use href="#user" />
                </svg>
                <p>حساب کاربری</p>
              </a>
              <div className="absolute dark:border-none border border-gray-100 w-52 p-2 bg-white text-gray-900 dark:text-gray-100 flex flex-col gap-y-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-12 transition-all delay-100 dark:bg-gray-700 top-20 rounded-lg text-base shadow child:transition-all duration-300 child:py-1.5 child:px-2 z-30 child:rounded-lg child:w-full">
                <a
                  href="dashboard-orders.html"
                  className="flex items-center gap-x-2  hover:bg-blue-500 hover:text-gray-100"
                >
                  <svg className="h-5 w-5">
                    <use href="#user" />
                  </svg>
                  سفارشات من
                </a>
                <a
                  href="dashboard-messages.html"
                  className="flex items-center gap-x-2  hover:bg-blue-500 hover:text-gray-100"
                >
                  <svg className="h-5 w-5">
                    <use href="#envelope" />
                  </svg>
                  لیست پیام ها
                </a>
                <a
                  href="dashboard-account.html"
                  className="flex items-center gap-x-2  hover:bg-blue-500 hover:text-gray-100"
                >
                  <svg className="h-5 w-5">
                    <use href="#cog" />
                  </svg>
                  اطلاعات کاربری
                </a>
                <a
                  href="#"
                  className="flex items-center gap-x-2  hover:bg-red-500 dark:hover:bg-red-500 hover:text-gray-100"
                >
                  <svg className="h-5 w-5">
                    <use href="#arrow-left-end" />
                  </svg>
                  خروج از حساب
                </a>
              </div>
            </button>
            {/* Toggle theme */}
            <button className="toggle-theme flex-center p-2 app-border rounded-full app-hover">
              <svg className="inline-block dark:hidden size-6">
                <use href="#moon" />
              </svg>
              <svg className="hidden dark:inline size-6">
                <use href="#sun" />
              </svg>
            </button>
            {/* Shoping cart */}
            <button className="flex-center p-2 bg-blue-600 text-gray-100 rounded-full open-cart relative">
              <svg className="size-6">
                <use href="#shopping-bag" />
              </svg>
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-xs pt-1 flex-center text-white">
                  2
                </span>
              </span>
            </button>
            {/* Cart */}
            <div className="cart ">
              {/* HEADER */}
              <div className="flex items-center justify-between pb-2 border-b-2 border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-300">
                <h2 className="font-DanaMedium text-lg">
                  سبد خرید{" "}
                  <span className="text-sm text-gray-400 font-Dana">(2 مورد)</span>
                </h2>
                <svg className="size-5 cursor-pointer close-cart mb-.5">
                  <use href="#x-mark" />
                </svg>
              </div>
              {/* MAIN */}
              <div className="flex flex-col divide-y-2 divide-gray-200 dark:divide-gray-600 my-4">
                {/* CART ITEM */}
                <div className="grid grid-cols-12 gap-x-2 w-full py-4 cursor-pointer">
                  {/* img */}
                  <div className="col-span-4 w-24 h-20">
                    <img
                      src="images/products/5.webp"
                      className="rounded-lg"
                      alt="product"
                    />
                  </div>
                  {/* detail */}
                  <div className="col-span-8 flex flex-col justify-between">
                    <h2 className="font-DanaMedium line-clamp-2">
                      گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 256
                      گیگابایت و رم 4 گیگابایت - نات اکتیو
                    </h2>
                    <div className="flex items-center justify-between gap-x-2 mt-2">
                      <button className="w-20 flex items-center justify-between gap-x-1 rounded-lg border border-gray-200 dark:border-white/20 py-1 px-2">
                        <svg className="size-4 increment text-green-600">
                          <use href="#plus" />
                        </svg>
                        <input
                          type="number"
                          name="customInput"
                          id="customInput"
                          min={0}
                          max={20}
                          defaultValue={2}
                          className="custom-input w-4 mr-2 text-sm"
                        />
                        <svg className="size-4 decrement text-red-500">
                          <use href="#minus" />
                        </svg>
                      </button>
                      <p className="text-lg text-blue-500 dark:text-blue-400 font-DanaMedium">
                        1,130,000
                        <span className="font-Dana text-sm">تومان</span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* CART ITEM */}
                <div className="grid grid-cols-12 gap-x-2 w-full py-4 cursor-pointer">
                  {/* img */}
                  <div className="col-span-4 w-24 h-20">
                    <img
                      src="images/products/1.png"
                      className="rounded-lg"
                      alt="product"
                    />
                  </div>
                  {/* detail */}
                  <div className="col-span-8 flex flex-col justify-between">
                    <h2 className="font-DanaMedium line-clamp-2">
                      گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 256
                      گیگابایت و رم 4 گیگابایت - نات اکتیو
                    </h2>
                    <div className="flex items-center justify-between gap-x-2 mt-2">
                      <button className="w-20 flex items-center justify-between gap-x-1 rounded-lg border border-gray-200 dark:border-white/20 py-1 px-2">
                        <svg className="size-4 increment text-green-600">
                          <use href="#plus" />
                        </svg>
                        <input
                          type="number"
                          name="customInput"
                          id="customInput"
                          min={0}
                          max={20}
                          defaultValue={2}
                          className="custom-input w-4 mr-2 text-sm"
                        />
                        <svg className="size-4 decrement text-red-500">
                          <use href="#minus" />
                        </svg>
                      </button>
                      <p className="text-lg text-blue-500 dark:text-blue-400 font-DanaMedium">
                        1,130,000
                        <span className="font-Dana text-sm">تومان</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* FOOTER */}
              <div className="w-[90%] fixed bottom-2 flex items-center justify-between border-t-2 border-gray-200 dark:border-gray-600 pt-4">
                <div>
                  <p className="text-gray-500 dark:text-gray-300 text-sm">
                    مبلغ قابل پرداخت :
                  </p>
                  <p className="text-lg text-blue-500 dark:text-blue-400 font-DanaDemiBold">
                    1,130,000
                    <span className="font-Dana text-sm">تومان</span>
                  </p>
                </div>
                <a
                  href="shopping-cart.html"
                  className="py-2 px-4 bg-blue-600 flex-center hover:bg-blue-700 transition-all rounded-lg text-gray-200"
                >
                  ثبت سفارش
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* NAVBAR */}
        <div className="relative flex-between h-16 bg-gray-900 dark:bg-gray-800 rounded-full text-gray-200 px-10">
          {/* MENU */}
          <ul className="flex items-center gap-x-8">
            { navbarData.map((navbar,idx)=>(
              <li className="menu-item group" key={idx}> 
                <a href="main.html" className="menu-item_link cursor-pointer">
                  {navbar.name}
                  {
                  navbar.subnav &&
                  <svg className="size-4 group-hover:rotate-180 duration-300">
                    <use href="#chevron" />
                  </svg>
                  }
                </a>
                { navbar.subnav &&

                <ul className="solid-menu">
                  {navbar.subnav.map((subNavName,idx)=>(
                    <li key={idx}>
                      <a href="aboute-us.html">{subNavName}</a>
                    </li>
                  ))}
                </ul>
                }
              </li>
            ))
            }
          </ul>
          {/* Addres */}
          <div className="relative">
            <button className="flex items-center gap-x-1 citylist-open">
              <svg className="size-6">
                <use href="#map" />
              </svg>
              <p>آدرس خود را انتخاب کنید</p>
            </button>
            <div className="citylist-menu z-30">
              {/* Search city */}
              <button className="flex bg-gray-200 dark:bg-gray-700 gap-x-1 w-full items-center p-2 rounded-lg">
                <svg className="size-6 text-gray-400">
                  <use href="#search" />
                </svg>
                <input
                  type="text"
                  className="w-full placeholder:text-gray-400"
                  placeholder="جستجوی شهر..."
                />
              </button>
              <h2 className="my-3 pr-1.5 font-DanaMedium">شهرهای پرتکرار :</h2>
              {/* City list */}
              <ul className="city-list">
                <li>
                  <a href="#">
                    <svg className="size-5">
                      <use href="#map" />
                    </svg>
                    تهران
                  </a>
                  <svg className="size-4 rotate-90">
                    <use href="#chevron" />
                  </svg>
                </li>
                <li>
                  <a href="#">
                    <svg className="size-5">
                      <use href="#map" />
                    </svg>
                    اصفهان
                  </a>
                  <svg className="size-4 rotate-90">
                    <use href="#chevron" />
                  </svg>
                </li>
                <li>
                  <a href="#">
                    <svg className="size-5">
                      <use href="#map" />
                    </svg>
                    مشهد
                  </a>
                  <svg className="size-4 rotate-90">
                    <use href="#chevron" />
                  </svg>
                </li>
                <li>
                  <a href="#">
                    <svg className="size-5">
                      <use href="#map" />
                    </svg>
                    شیراز
                  </a>
                  <svg className="size-4 rotate-90">
                    <use href="#chevron" />
                  </svg>
                </li>
                <li>
                  <a href="#">
                    <svg className="size-5">
                      <use href="#map" />
                    </svg>
                    تبریز
                  </a>
                  <svg className="size-4 rotate-90">
                    <use href="#chevron" />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
