from sqlalchemy import create_engine
from .config import settings
from sqlalchemy.orm import DeclarativeBase, sessionmaker
from urllib.parse import quote_plus

class Base(DeclarativeBase):
    pass

DATABASE_URL = f"postgresql+psycopg://{settings.db_user}:{quote_plus(settings.db_password)}@{settings.db_host}:{settings.db_port}/{settings.db_name}"

engine = create_engine(DATABASE_URL)

Session = sessionmaker(bind=engine, autoflush=False, autocommit=False)


def get_db():
    db = Session()
    try:
        yield db
    finally: 
        db.close()
