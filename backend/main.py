from typing import List, Optional
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn

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

class NavChildItem(BaseModel):
    name: str
    link: str

class NavItems(NavChildItem):
    name: str
    link: str 
    subnav: Optional[List[NavChildItem]] = None

@app.get("/navigation", response_model=List[NavItems])
async def get_navigation():
    return [
        {"name": "صفحه اصلی", "subnav": None,"link":"/"},
        {"name": "دسته بندی ها", "subnav": None,"link":"/about"},
        {"name": "فروشگاه", "subnav": None,"link":"/"},
        {"name": "وبلاگ", "subnav": None,"link":"/"},
        {"name": "منوی ساده", "subnav": [{"name": "صفحه اصلی","link":"/"},{"name": "وبلاگ","link":"/"}],"link":"/"},
    ]

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8001,
        reload=True,
        log_level="info"
    )
