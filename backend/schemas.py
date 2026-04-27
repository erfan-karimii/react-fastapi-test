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
    image_url: Optional[str] = None

class Slide(BaseModel):
    id:int
    image: str
    title: str
    
class PhoneSchema(BaseModel):
    phone: str

class VerifySchema(BaseModel):
    phone: str
    code: str

class TokenResp(BaseModel):
    access_token: str
    token_type: str = "bearer"

class DashboardResp(BaseModel):
    phone: str