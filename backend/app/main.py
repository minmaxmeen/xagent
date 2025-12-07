from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="XAgent Backend (FastAPI)")


class EchoItem(BaseModel):
    text: str


@app.get("/api/hello")
async def hello():
    return {"message": "Hello from XAgent backend!"}


@app.get("/health")
async def health():
    return {"status": "ok"}


@app.post("/api/echo")
async def echo(item: EchoItem):
    return {"echo": item.text}
