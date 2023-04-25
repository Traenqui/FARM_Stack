from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from config.config import settings

from api.v1 import auth
from api.v1 import user
from api.v1 import tracker
from api import health

app = FastAPI(title="Tracker Tool",
              docs_url="/api/docs",
              openapi_url="/api")


origins = [
    settings.CLIENT_ORIGIN,
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/v1")
async def root():
    return {"message": "Hello World"}


app.include_router(auth.router, tags=["auth"])
app.include_router(health.router, tags=['health'])
app.include_router(user.router, tags=["user"])
app.include_router(tracker.router, tags=["tracker"])

if __name__ == "__main__":
    # Use this for debugging purposes only
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8001, log_level="debug")
