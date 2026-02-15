
function Pagination() {
  return (
    <div className="mt-10 w-full flex items-center justify-center">
        <ul className="flex items-center gap-x-3 child:flex child:items-center child:justify-center child:w-8 child:h-8 child:cursor-pointer child:shadow child:rounded-lg child:transition-all child:duration-300">
            <li className="bg-white dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-blue-500 hover:text-white">
                <svg className="size-5 rotate-180">
                    <use href="#chevron-left" />
                </svg>
            </li>
            <li className="text-white bg-blue-500">
                <a href="#">1</a>
            </li>
            <li className="bg-white dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white">
                <a href="#">2</a>
            </li>
            <li className="bg-white dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white">
                <a href="#">...</a>
            </li>
            <li className="bg-white dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white">
                <svg className="size-5">
                    <use href="#chevron-left" />
                </svg>
            </li>
        </ul>
    </div>

  )
}

export default Pagination