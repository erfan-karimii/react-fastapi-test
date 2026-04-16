import Breadcrumb from "../components/filters/Breadcrumb"
import SideFilter from "../components/filters/SideFilter"
import TopBoxFilter from "../components/filters/TopBoxFilter"
import ProductCard from "../components/product/ProductCard"
import Pagination from "../components/filters/Pagination"
import { useFetch } from "../hooks/useFetch"
import type {Product} from "../components/product/type"

function Shop() {
  const [products,productsError] = useFetch<Product[]>("/products")
  if (productsError){
    return "undere construction"
  }
  return (
    <>
      <Breadcrumb />
      <div className="flex flex-col lg:flex-row gap-4 mt-5 mx-2 md:mx-0">
        <SideFilter />
        <div className="lg:w-3/4">
          <TopBoxFilter />
          <div className="grid grid-cols-1 xxs:grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-3 xs:gap-2 sm:gap-4">
            {products?.map((product,idx)=>
              <ProductCard product={product} key={idx}  />
            )}
          </div>
          <Pagination />
        </div>
      </div>
    </>
  )
}

export default Shop