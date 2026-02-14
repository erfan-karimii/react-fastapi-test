from typing import List, Optional
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Navigation API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # Vite
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

class NavItems(BaseModel):
    name: str
    link: str 
    subnav: Optional[List[NavItems]] = None


class Product(BaseModel):
    id: int
    name: str
    price: float
    description: Optional[str] = None

@app.get("/navigation", response_model=List[NavItems])
async def get_navigation():
    return [
        {"name": "صفحه اصلی", "subnav": None,"link":"/"},
        {"name": "دسته بندی ها", "subnav": None,"link":"/about"},
        {"name": "فروشگاه", "subnav": None,"link":"/"},
        {"name": "وبلاگ","link":"/"},
        {"name": "منوی ساده", "subnav": [{"name": "صفحه اصلی","link":"/","subnav":[{"name": "وبلاگ","link":"/"}]},{"name": "وبلاگ","link":"/",}],"link":"/"},
    ]

@app.get("/product-list", response_model=List[Product])
async def get_product_list():
    return [
        {"id": 1, "name": "محصول 1", "price": 100000, "description": "توضیحات محصول 1"},
        {"id": 2, "name": "محصول 2", "price": 200000, "description": "توضیحات محصول 2"},
        {"id": 3, "name": "محصول 3", "price": 300000, "description": "توضیحات محصول 3"},
    ]
