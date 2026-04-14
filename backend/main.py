from typing import List
from contextlib import asynccontextmanager
from time import sleep
from fastapi_swagger import patch_fastapi


from fastapi import FastAPI , HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from schemas import NavItems, Product , Slide
from utils import initial_db


db = []

@asynccontextmanager
async def lifespan(app: FastAPI):
    initial_db(db)
    yield
    db.clear()

app = FastAPI(docs_url=None,swagger_ui_oauth2_redirect_url=None,title="test ecommerce API",lifespan=lifespan)
patch_fastapi(app,docs_url="/docs")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)


app.mount(
    "/media",
    StaticFiles(directory="media"),
    name="media",
)


@app.get("/navigation", response_model=List[NavItems])
async def get_navigation():
    return [
        {"name": "صفحه اصلی", "subnav": None,"link":"/"},
        {"name": "فروشگاه", "subnav": None,"link":"/shop"},
        {"name": "کارت", "subnav": None,"link":"/cart"},
        {"name": "منوی ساده", "subnav": [{"name": "صفحه اصلی","link":"/","subnav":[{"name": "وبلاگ","link":"/"}]},{"name": "وبلاگ","link":"/",}],"link":"/"},
    ]

@app.get("/products/amazing", response_model=List[Product])
async def get_amazing_product_list():
    # sleep(7)
    return [p for p in db if p.is_amazing is True]

@app.get("/products", response_model=List[Product])
async def get_product_list():
    return db

@app.get("/product/{product_id}", responses={404:{"detail":"product not found"}},response_model=Product)
async def get_product_detail(product_id:int):
    for product in db:
        if product.id == product_id:
            return product
    else:
        raise HTTPException(status_code=404, detail=f"product not found")


@app.get("/slides", response_model=List[Slide])
async def get_product_list():
    slides = [
        {
            "id": 1,
            "image": "http://localhost:8000/media/products/1.jpg",
            "title": "جدیدترین گوشی های موبایل",
        },
        {
            "id": 2,
            "image": "http://localhost:8000/media/products/2.jpg",
            "title": "لپ تاپ های گیمینگ",
        },
    ]
    return slides
