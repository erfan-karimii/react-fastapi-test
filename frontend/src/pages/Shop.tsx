import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import Breadcrumb from "../components/filters/Breadcrumb"
import SideFilter from "../components/filters/SideFilter"
import TopBoxFilter from "../components/filters/TopBoxFilter"
import ProductCard from "../components/productcard/ProductCard"
import Pagination from "../components/filters/Pagination"

function Shop() {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <Breadcrumb />
        <div className="flex flex-col lg:flex-row gap-4 mt-5 mx-2 md:mx-0">
            <SideFilter />
            <div className="lg:w-3/4">
                <TopBoxFilter />
                <div className="grid grid-cols-1 xxs:grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-3 xs:gap-2 sm:gap-4">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard /> 
                </div>
                <Pagination />               
            </div>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default Shop