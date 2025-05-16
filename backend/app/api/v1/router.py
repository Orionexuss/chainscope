from fastapi import APIRouter
from .endpoints import wallets, users

route = APIRouter(prefix='/v1')

route.include_router(wallets.router)
route.include_router(users.router)
