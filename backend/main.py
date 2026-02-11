from fastapi import FastAPI
from typing import List, Optional
from pydantic import BaseModel

app = FastAPI(title="Navigation API")


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

import uvicorn
if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    )
