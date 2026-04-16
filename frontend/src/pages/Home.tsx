import AmazingSlider from "../components/slider/AmazingSlider"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useAuth } from "../context/AuthContext";


export default function Index() {
  const { user } = useAuth()

  return (
    <>
      { user ? <AmazingSlider /> : "please login" }
    </>
  )
}
