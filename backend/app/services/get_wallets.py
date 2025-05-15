import asyncio

from app.core.database import Session, Base, engine
from app.models.wallet import Wallet
from app.services.internal.wallet_fetcher import fetch_wallets

Base.metadata.create_all(bind=engine)

async def get_wallets():
    rows = fetch_wallets()
    db = Session()
    try:
        for row in rows:
            db.merge(
                Wallet(
                    wallet_address=row.get("userAddress"),
                    first_trade_date=row["firstTradeDate"],
                    user_rank=row["userRank"],
                )
            )
        db.commit()
    finally:
        db.close()


if __name__ == "__main__":
    asyncio.run(get_wallets())
