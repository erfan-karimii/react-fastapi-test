from pydantic import BaseModel
from typing import List, Optional

class NavItems(BaseModel):
    name: str
    link: str 
    subnav: Optional[List[NavItems]] = None


class Product(BaseModel):
    id: int
    name: str
    price: float
    description: Optional[str] = None
    is_amazing: Optional[bool] = False