from fastapi import FastAPI
from app.api.v1 import wallets

app = FastAPI()
app.include_router(wallets.router)

@app.get("/")
async def root():
    return {"message": "Welcome to Chainscope!"}
