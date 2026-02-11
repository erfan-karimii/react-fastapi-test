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

class NavItem(BaseModel):
    name: str
    subnav: Optional[List[str]] = None
    link: Optional[str] = None



@app.get("/navigation", response_model=List[NavItem])
async def get_navigation():
    return [
        {"name": "صفحه اصلی", "subnav": None,"link":"/"},
        {"name": "دسته بندی ها", "subnav": ["موبایل", "لبتاپ"],"link":"/about"},
        {"name": "فروشگاه", "subnav": None,"link":"/"},
        {"name": "وبلاگ", "subnav": None,"link":"/"},
        {"name": "منوی ساده", "subnav": ["درباره ما", "سوالات متداول"],"link":"/"},
    ]

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    )
