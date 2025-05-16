from fastapi import FastAPI
from app.api.v1.router import route as router_v1

app = FastAPI()
app.include_router(router_v1)

@app.get("/")
async def root():
    return {"message": "Welcome to Chainscope!"}
