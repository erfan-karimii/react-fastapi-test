import { Link } from "react-router"
import type {Product} from "./type"

interface ProductCardProps{
  product:Product
}
function ProductCard({product}:ProductCardProps) {
  return (
    <div className="product-card group">
      {/* product header */}
      <div className="product-card_header">
        <div className="flex items-center gap-x-2">
          <div className="tooltip">
            <button className="rounded-full p-1.5 app-border app-hover">
              <svg className="size-4">
                <use href="#shopping-cart" />
              </svg>
            </button>
            <div className="tooltiptext">سبد خرید</div>
          </div>
          <div className="tooltip">
            <button className="rounded-full p-1.5 app-border app-hover">
              <svg className="size-4">
                <use href="#heart" />
              </svg>
            </button>
            <div className="tooltiptext">علاقه مندی</div>
          </div>
          <div className="tooltip">
            <button className="rounded-full p-1.5 app-border app-hover">
              <svg className="size-4">
                <use href="#arrows-up-down" />
              </svg>
            </button>
            <div className="tooltiptext">مقایسه</div>
          </div>
        </div>
        {/* badge offer */}
        <span className="product-card_badge">xxx% تخفیف‌{/*س*/}</span>
      </div>
      {/* product img */}
      <Link to={`/single/${product.id}`}>
        <img
          className="product-card_img group-hover:opacity-0 absolute"
          src={product.image_url?product.image_url:""}
          alt=""
        />
        <img
          className="product-card_img opacity-0 group-hover:opacity-100"
          src={product.image_url?product.image_url:""}
          alt=""
        />
      </Link>
      {/*  product footer */}
      <div className="space-y-2">
        <Link to={`/single/1`} className="product-card_link">
          {product.name}
        </Link>
        {/* Rate and Price */}
        <div className="product-card_price-wrapper">
          {/* RATE */}
          <div className="product-card_rate">
            <span className="flex items-center gap-x-0.5">
              <svg className="size-4 text-blue-500 mb-0.5">
                <use href="#rocket" />
              </svg>
              <p className="text-xs">ارسال امروز</p>
            </span>
            <span className="text-gray-400 flex items-center text-sm gap-x-0.5">
              <p> 5.0 </p>
              <svg className="size-4 mb-1">
                <use href="#star" />
              </svg>
            </span>
          </div>
          {/* Price */}
          <div className="product-card_price">
            <del>
              xxx<h6>تومان</h6>
            </del>
            <p>{product.price}</p>
            <span>تومان</span>
          </div>
        </div>
      </div>
  </div>
  )
}

export default ProductCard