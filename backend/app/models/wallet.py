from app.core.database import Base
from sqlalchemy.orm import Mapped, mapped_column
from datetime import datetime

class Wallet(Base):
    __tablename__="wallet"
    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    address: Mapped[str] = mapped_column(unique=True, nullable=False, index=True)
    first_trade_date: Mapped[datetime] = mapped_column(nullable=False)
