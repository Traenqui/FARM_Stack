from motor.motor_asyncio import AsyncIOMotorClient
from config.config import settings


client = AsyncIOMotorClient(settings.DATABASE_URL,
                            username=settings.MONGO_INITDB_ROOT_USERNAME,
                            password=settings.MONGO_INITDB_ROOT_PASSWORD)
db = client.fastapi

try:
    client.admin.command('ping')
    print('Connected to MongoDB')
except Exception as e:
    print({"message": "Unable to connect to the MongoDB server.",
           "detail": e})


User_collection = db.users
Tracker_collection = db.trackers
