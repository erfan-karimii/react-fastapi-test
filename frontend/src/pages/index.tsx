import Header from "../components/header/Header"
import AmazingSlider from "../components/products-slider/AmazingSlider"
import Footer from "../components/footer/Footer"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function Index() {
  return (
    <>
      <Header showSlider={true} />
      <div className="container mt-5">
        <AmazingSlider />
      </div>
      <Footer />
    </>
  )
}
