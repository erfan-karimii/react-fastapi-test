from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    JWT_SECRET: str = "supersecret"
    JWT_ALG: str = "HS256"
    OTP_EXP_MINUTES: int = 5

settings = Settings()
