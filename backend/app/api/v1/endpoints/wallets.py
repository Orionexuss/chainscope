from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.orm import Session
from app.core.database import get_db
from typing import Annotated
from app.models.wallet import Wallet

router = APIRouter(prefix="/wallets", tags=["wallets"])

@router.get('/')
async def get_wallets(db: Annotated[Session, Depends(get_db)]):
    wallets = db.execute(select(Wallet)).scalars().all()

    return {"data": wallets}

