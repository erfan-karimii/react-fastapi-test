import { Link } from "react-router";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch.ts"

import ImageSlider from "./ImageSlider";

type NavbarItem = {
  name: string;
  link: string;
  subnav?: NavbarItem[];
};

type SliderItem = {
  id:number;
  image:string;
  title:string;
};

export default function Header() {
  const showSlider = useLocation().pathname === "/" ? true : false;

  const [navigation,navigationError] = useFetch<NavbarItem[]>("/navigation")
  const [slidesRaw,slidesError] = useFetch<SliderItem[]>("/slides")

  if (navigationError){
    return "header not loaded"
  }
  if (!navigation) return null;
  
  if (slidesError){
    return "slides not loaded"
  }
  const slides = slidesRaw ?? []
  return (
    <header className="header">
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
          </div>
          {/* Logo */}
          <a href="#" className="flex flex-col text-center ml-20">
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
          </div>
        </div>
        {/* NAVBAR */}
        <div className="relative flex-between h-16 bg-gray-900 dark:bg-gray-800 rounded-full text-gray-200 px-10">
          {/* MENU */}
          <ul className="flex items-center gap-x-8">
            { navigation.map((navbar,idx)=>(
              <li className="menu-item group" key={idx}> 
                <Link to={navbar.link} className="menu-item_link cursor-pointer">
                  {navbar.name}
                  {
                  navbar.subnav &&
                  <svg className="size-4 group-hover:rotate-180 duration-300">
                    <use href="#chevron" />
                  </svg>
                  }
                </Link>
                { navbar.subnav &&

                <ul className="solid-menu">
                  {navbar.subnav.map((subNavName,idx)=>(
                    <li key={idx}>
                      <Link to={subNavName.link}>{subNavName.name}</Link>
                    </li>
                  ))}
                </ul>
                }
              </li>
            ))
            }
          </ul>
        </div>
      {showSlider && <ImageSlider slides={slides} />}
      </div>
    </header>
  )
}
