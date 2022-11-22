from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from db.config import db_config
from db.db_manager import DBConnection
from routes import transaction_route
from routes import user_route

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(transaction_route.router)
app.include_router(user_route.router)





if __name__ == "__main__":
    uvicorn.run("server:app", host="127.0.0.1", port=8000, reload=True)
