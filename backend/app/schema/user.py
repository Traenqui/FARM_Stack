from datetime import datetime
from pydantic import BaseModel, EmailStr, constr
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


class UserBase(BaseModel):
    """base model"""
    name: str
    email: EmailStr
    photo: str
    role: str | None = None
    created_at: datetime | None = None
    updated_at: datetime | None = None
    client_number: str | None = None
    super_user: bool = False

    class Config:
        orm_mode = True


class UserIn(UserBase):
    """User Create"""
    password: constr(min_length=8)  # type: ignore
    passwordConfirm: str
    verified: bool = False


class UserOut(UserBase):
    """what the api returns"""


class UserInDB(UserBase):
    """what gets stored in db"""
    hashed_password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    status: str
    user: UserBase


def hash_password(password: str):
    return pwd_context.hash(password)


def verify_password(password: str, hashed_password: str):
    return pwd_context.verify(password, hashed_password)
