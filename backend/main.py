from typing import List
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from schemas import NavItems, Product
from utils import initial_db
db = []

@asynccontextmanager
async def lifespan(app: FastAPI):
    initial_db(db)
    yield
    db.clear()

app = FastAPI(title="test ecommerce API",lifespan=lifespan)


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



@app.get("/navigation", response_model=List[NavItems])
async def get_navigation():
    return [
        {"name": "صفحه اصلی", "subnav": None,"link":"/"},
        {"name": "فروشگاه", "subnav": None,"link":"/shop"},
        {"name": "کارت", "subnav": None,"link":"/cart"},
        {"name": "وبلاگ","link":"/"},
        {"name": "منوی ساده", "subnav": [{"name": "صفحه اصلی","link":"/","subnav":[{"name": "وبلاگ","link":"/"}]},{"name": "وبلاگ","link":"/",}],"link":"/"},
    ]

@app.get("/product-list", response_model=List[Product])
async def get_amazing_product_list():
    return db
