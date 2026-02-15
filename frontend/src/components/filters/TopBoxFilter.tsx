
function TopBoxFilter() {
  return (
    <div className="hidden lg:flex items-center justify-between  mb-6">
        <div className="flex items-center gap-x-5">
            <div className="flex items-center gap-x-2">
            <svg className="size-6 text-gray-400">
                <use href="#sort-list" />
            </svg>
            <h2 className="font-DanaDemiBold text-gray-400">مرتب سازی :</h2>
            </div>
            <ul className="flex items-center gap-x-1 lg:gap-x-4 child:transition-all child:cursor-pointer child:rounded-lg child:px-1 child:py-1 child:text-sm child:lg:text-base">
            <li className="text-blue-500">محبوب ترین</li>
            <li className="text-gray-400">پرفروش ترین</li>
            <li className="text-gray-400">ارزان ترین</li>
            <li className="text-gray-400">گران ترین</li>
            </ul>
        </div>
        <span className="text-sm text-gray-400 end">۱۳,۰۴۰ کالا </span>
    </div>

  )
}

export default TopBoxFilter