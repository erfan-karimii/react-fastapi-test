from schemas import Product

def initial_db(db:list):
   db.extend([
    Product(id=3,  name="محصول 3",  price=150_000, description="توضیحات محصول 3",  is_amazing=False, image_url="/media/products/3.png"),
    Product(id=4,  name="محصول 4",  price=175_000, description="توضیحات محصول 4",  is_amazing=True,  image_url="/media/products/4.png"),
    Product(id=5,  name="محصول 5",  price=220_000, description="توضیحات محصول 5",  is_amazing=False, image_url="/media/products/5.png"),
    Product(id=6,  name="محصول 6",  price=310_000, description="توضیحات محصول 6",  is_amazing=True,  image_url="/media/products/6.png"),
    Product(id=7,  name="محصول 7",  price=95_000,  description="توضیحات محصول 7",  is_amazing=False, image_url="/media/products/7.png"),
    Product(id=8,  name="محصول 8",  price=480_000, description="توضیحات محصول 8",  is_amazing=True,  image_url="/media/products/8.png"),
    Product(id=9,  name="محصول 9",  price=260_000, description="توضیحات محصول 9",  is_amazing=False, image_url="/media/products/9.png"),
    Product(id=10, name="محصول 10", price=199_000, description="توضیحات محصول 10", is_amazing=True,  image_url="/media/products/10.png"),
    Product(id=11, name="محصول 11", price=340_000, description="توضیحات محصول 11", is_amazing=False, image_url="/media/products/11.png"),
    Product(id=12, name="محصول 12", price=125_000, description="توضیحات محصول 12", is_amazing=False, image_url="/media/products/12.png"),
    Product(id=13, name="محصول 13", price=560_000, description="توضیحات محصول 13", is_amazing=True,  image_url="/media/products/13.png"),
    Product(id=14, name="محصول 14", price=410_000, description="توضیحات محصول 14", is_amazing=True,  image_url="/media/products/14.png"),
    Product(id=15, name="محصول 15", price=275_000, description="توضیحات محصول 15", is_amazing=False, image_url="/media/products/15.png"),
    Product(id=16, name="محصول 16", price=180_000, description="توضیحات محصول 16", is_amazing=False, image_url="/media/products/16.png"),
    Product(id=17, name="محصول 17", price=620_000, description="توضیحات محصول 17", is_amazing=True,  image_url="/media/products/17.png"),
    Product(id=18, name="محصول 18", price=305_000, description="توضیحات محصول 18", is_amazing=False, image_url="/media/products/18.png"),
    Product(id=19, name="محصول 19", price=455_000, description="توضیحات محصول 19", is_amazing=True,  image_url="/media/products/19.png"),
    Product(id=20, name="محصول 20", price=210_000, description="توضیحات محصول 20", is_amazing=False, image_url="/media/products/20.png"),
    Product(id=21, name="محصول 21", price=385_000, description="توضیحات محصول 21", is_amazing=True,  image_url="/media/products/21.png"),
    Product(id=22, name="محصول 22", price=145_000, description="توضیحات محصول 22", is_amazing=False, image_url="/media/products/22.png"),
])
