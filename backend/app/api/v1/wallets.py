from fastapi import APIRouter

router = APIRouter(prefix="/wallets", tags=["wallets"])


@router.get("/")
async def getWallets():
    return {"data": []}
