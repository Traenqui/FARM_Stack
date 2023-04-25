from fastapi import APIRouter, Depends
from bson.objectid import ObjectId


from database.database import User_collection
from schema.user import UserResponse
from config.oauth2 import require_user

router = APIRouter()


@router.get('/me', response_model=UserResponse)
async def get_me(user_id: str = Depends(require_user)):
    user = await User_collection.find_one({'_id': ObjectId(str(user_id))})
    return {"status": "success", "user": user}
