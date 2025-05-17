from typing import Annotated

from app.core.database import get_db
from app.models.wallet import Wallet
from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.orm import Session

router = APIRouter(prefix="/wallets", tags=["wallets"])


@router.get("/")
async def get_wallets(db: Annotated[Session, Depends(get_db)]):
    wallets = db.execute(select(Wallet).order_by(Wallet.user_rank)).scalars().all()

    return {"data": wallets}
