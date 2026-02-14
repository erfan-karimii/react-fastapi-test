FROM docker.arvancloud.ir/python:3.14.1-bookworm

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# System deps (minimal)
RUN apt-get update \
    && apt-get install -y build-essential \
    && rm -rf /var/lib/apt/lists/*

# Dependencies
COPY backend/requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# App code
COPY backend /app

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
