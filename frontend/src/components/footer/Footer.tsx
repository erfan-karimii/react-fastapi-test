import { Link } from "react-router-dom"

import "./footer.css"

import cert1 from "../../assets/images/footer/1.png"
import cert2 from "../../assets/images/footer/2.png"

function Footer() {
  return (
    <footer className="container my-12">
        <div className="relative w-full bg-gray-900 dark:bg-gray-800 text-white rounded-2xl p-4 lg:p-9 footer-container">
            <div className="top-section">
                <div className="mini-about">
                    <h2 className="text-xl font-MorabbaMedium mb-5">درباره کارین شاپ</h2>
                    <p className="leading-8 text-gray-400 mb-5">در فروشگاه آنلاین ما، بهترین مدل‌های موبایل و لپ‌تاپ از
                    برندهای معتبر جهانی را با کیفیت بالا و قیمتی مناسب برای شما فراهم آورده‌ایم. با انتخاب محصولات
                    ما، تجربه‌ای حرفه‌ای و لذت‌بخش از فناوری را در خانه یا محل کار داشته باشید.
                    </p>
                </div>
                <div className="quick-access">
                    <h3 className="text-xl font-MorabbaMedium mb-5">دسترسی سریع</h3>
                    <ul className="text-gray-400">
                        <li className="mb-2">
                            <Link to="/" className="hover:text-blue-500 transition-colors duration-300">
                                صفحه اصلی
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/about" className="hover:text-blue-500 transition-colors duration-300">
                                درباره ما
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/products" className="hover:text-blue-500 transition-colors duration-300">
                                محصولات
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/contact" className="hover:text-blue-500 transition-colors duration-300">
                                تماس با ما
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="mini-contact-us">
                    <h3 className="text-xl font-MorabbaMedium mb-5">تماس با ما</h3>
                    <p className="text-gray-400 mb-2">ایمیل: info@karinshop.com</p>
                    <p className="text-gray-400 mb-2">تلفن: +98 123 456 7890</p>
                    <p className="text-gray-400 mb-2">آدرس: خیابان فناوری، تهران، ایران</p>
                </div>
                <div className="cerftificates">
                    <h3 className="text-xl font-MorabbaMedium mb-3">گواهینامه‌ها</h3>
                    <div className="flex items-center gap-4">
                        <img src={cert1} alt="SSL Certificate" className="w-16 h-16 object-contain" />
                        <img src={cert2} alt="ISO Certificate" className="w-16 h-16 object-contain" />
                    </div>
                    <a href="#" className="ring-2 ring-gray-400 text-gray-300 w-32 rounded-lg text-sm flex-center gap-x-2 py-1.5 px-2 mt-10 ">
                        بازگشت به بالا
                        <svg className="size-4 rotate-180">
                            <use href="#chevron"></use>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="bottom-section">
                <div className="main-logo">
                    <a href="#" className="text-3xl font-MorabbaMedium">
                        <span className="text-blue-500">کارین</span> شاپ
                    </a>
                </div>
                <div className="email-box">
                    <div className="bg-gray-900 dark:bg-gray-800 p-1.5 rounded-xl w-72 lg:w-[350px] flex !flex-row-reverse items-center justify-between">
                        <input type="text" className="bg-transparent text-gray-200 px-2 w-full email-box-input" placeholder="از جدیدترین تخفیف ها با خبر شوید " />
                        <button className="px-4 py-1 bg-blue-500 rounded-xl font-DanaMedium">
                            ثبت
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <p className="text-center text-sm my-4 text-gray-400">Copyright © 2025 Karin. All rights reserved.</p>
    </footer>
  )
}

export default Footer