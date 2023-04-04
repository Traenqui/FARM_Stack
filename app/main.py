from fastapi import FastAPI

app = FastAPI(title="Tracker Tool",
              docs_url="/api/docs",
              openapi_url="/api")


@app.get("/api/v1")
async def root():
    return {"message": "Hello World"}


if __name__ == "__main__":
    # Use this for debugging purposes only
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8001, log_level="debug", reload=True)
