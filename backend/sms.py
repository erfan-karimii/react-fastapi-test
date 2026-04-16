import random

async def send_sms(phone: str, code: str):
    print(f"[SMS] Sending OTP {code} to {phone}")
    # integrate real SMS provider here...
