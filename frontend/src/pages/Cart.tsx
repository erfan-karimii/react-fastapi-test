import Breadcrumb from "../components/filters/Breadcrumb"
import ProductShoppingCard from "../components/product/ProductShoppingCard"
import { useCart } from "../context/CartContext"

export default function Cart() {
    const { cart , clearCart } = useCart()

    if (!cart.length){
        return "محصولی در سبد خرید یافت نشد"
    }
    return (
        <>
            <Breadcrumb />
            <section className="flex flex-col lg:flex-row justify-between items-start gap-4 child:rounded-lg child:bg-white child:dark:bg-gray-800 child:shadow child:p-4 mt-5">
                <div className="w-full lg:w-3/4 flex flex-col gap-y-8 ">
                    {/* shopping cart header */}
                    <div className="flex items-center justify-between">
                        <span className="flex items-center gap-x-2">
                            <h2 className="font-DanaMedium text-xl">سبد خرید</h2>
                            <p className="text-gray-400">({cart.length} کالا)</p>
                        </span>
                        <span className="flex items-center gap-x-1 text-red-600 dark:text-white cursor-pointer">
                            <p className="mt-1 font-DanaMedium" onClick={()=>clearCart()} >حذف همه</p>
                            <svg className="w-5 h-5">
                                <use href="#trash" />
                            </svg>
                        </span>
                    </div>
                    {/* PRODUCT ITEMS */}
                    <div className="w-full flex flex-col gap-y-4 child:p-2 lg:child:p-4 ">
                        {cart.map((cartItem,idx)=>
                            <ProductShoppingCard key={idx} cartItem={cartItem}/>
                        )}
                    </div>
                </div>


                <div className="w-full lg:w-1/4 lg:sticky top-5 flex flex-col gap-y-4">
                    {/* PRICE */}
                    <ul className="child:flex child:items-center child:justify-between space-y-8">
                        <li>
                            <p>قیمت کالاها({cart.length})</p>
                            <p className="flex gap-x-1 text-gray-600 dark:text-gray-300 ">
                                xxx<span className="hidden xl:flex">تومان</span>
                            </p>
                        </li>
                        <li>
                            <p>تخفیف </p>
                            <p className="font-DanaMedium text-gray-700 dark:text-gray-200">
                                xxx تومان
                            </p>
                        </li>
                        <li className="border-t-2 border-dashed border-gray-400 pt-8">
                            <p> مبلغ نهایی :</p>
                            <p>xxx تومان</p>
                        </li>
                    </ul>
                    <a
                        href="checkout.html"
                        className="w-full mt-4 flex items-center gap-x-1 justify-center bg-blue-500 text-white hover:bg-blue-600 transition-all rounded-lg shadow py-2"
                    >
                        تایید و تکمیل سفارش
                        <svg className="w-5 h-5">
                            <use href="#shopping-bag" />
                        </svg>
                    </a>
                </div>


            </section>
        </>
    )
}
