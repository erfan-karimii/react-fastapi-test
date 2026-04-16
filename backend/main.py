from typing import List
from contextlib import asynccontextmanager
from time import sleep
from datetime import datetime, timedelta
import random
from fastapi_swagger import patch_fastapi

from fastapi import FastAPI , HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from schemas import NavItems, Product , Slide ,PhoneSchema,VerifySchema,TokenResp
from utils import initial_db
from sms import send_sms
from auth import create_jwt
from config import settings


db = []
USERS = []        # {id, phone, is_verified}
OTPS = []         # {phone, code, expires_at}
USER_ID_COUNTER = 1

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

@app.post("/auth/send_otp")
async def send_otp(data: PhoneSchema):
    global OTPS

    code = f"{random.randint(100000, 999999)}"
    expires_at = datetime.utcnow() + timedelta(minutes=settings.OTP_EXP_MINUTES)

    OTPS.append({
        "phone": data.phone,
        "code": code,
        "expires_at": expires_at,
    })

    await send_sms(data.phone, code)
    return {"msg": "OTP sent"}

@app.post("/auth/verify", response_model=TokenResp)
async def verify_otp(data: VerifySchema):
    global USERS, OTPS, USER_ID_COUNTER

    # find OTP
    otp = next((o for o in OTPS if o["phone"] == data.phone and o["code"] == data.code), None)

    if not otp:
        raise HTTPException(status_code=400, detail="Invalid code")

    if otp["expires_at"] < datetime.utcnow():
        raise HTTPException(status_code=400, detail="Expired code")

    # find user
    user = next((u for u in USERS if u["phone"] == data.phone), None)

    if not user:
        user = {
            "id": USER_ID_COUNTER,
            "phone": data.phone,
            "is_verified": True,
        }
        USERS.append(user)
        USER_ID_COUNTER += 1

    # return JWT
    token = create_jwt(user["id"])
    return TokenResp(access_token=token)