from dotenv import load_dotenv
from pydantic_settings import BaseSettings, SettingsConfigDict

load_dotenv()


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")
    db_port: int
    db_name: str
    db_user: str
    db_password: str
    db_host: str


settings = Settings()  # type: ignore
