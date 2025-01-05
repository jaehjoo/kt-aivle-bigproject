from fastapi import FastAPI

app = FastAPI()

@app.get("/api/hello/ai")
def api_hello():
    return {"message": "hello, ai!"}