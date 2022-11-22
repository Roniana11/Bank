from fastapi import APIRouter, Request,HTTPException
from services.transaction_service import transaction_service
from db.models.transaction_model import Transaction
from services.exceptions import *
from typing import Union


router = APIRouter(prefix="/transactions")

@router.get("/", status_code=200)
def get_transactions(request:Request, category: Union[str, None] = None) -> list:
    try:
        user_id = int(request.headers.get("Authorization"))
        if category:
            return transaction_service.select_transactions_by_category(user_id)
        else:
            return transaction_service.select_all_transactions(user_id)
    except InvalidInputType as e:
        raise HTTPException(status_code=400, detail=e.args[0])
    except NonExistingUser as e:
        raise HTTPException(status_code=404, detail=e.args[0])


@router.post("/", status_code=201)
async def add_transaction(transaction: Transaction)-> None:
    try:
        transaction = transaction_service.insert_transaction(transaction)
    except InvalidInputType as e:
        raise HTTPException(status_code=400, detail=e.args[0])


@router.delete("/{transaction_id}", status_code=200)
def delete_transaction(transaction_id:int) -> None :
    try:
        return transaction_service.delete_transaction(transaction_id)
    except InvalidInputType as e:
        raise HTTPException(status_code=400, detail=e.args[0])
    except NonExistingUser as e:
        raise HTTPException(status_code=404, detail=e.args[0])



