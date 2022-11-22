from pydantic import BaseModel


class Transaction(BaseModel):
    amount:int
    vendor:str
    category:str
    is_deposit:int
    user_id:int
    

