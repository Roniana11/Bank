from fastapi import APIRouter, Request,HTTPException
from services.user_service import user_service
from services.transaction_service import transaction_service
from services.exceptions import *



router = APIRouter(prefix="/users")


@router.get("/", status_code=200)
def get_user_balance(request: Request) -> list:
    try:
        user_id = int(request.headers.get("Authorization"))
        balance = transaction_service.sum_user_transactions(user_id)
        user_service.update_balance(int(balance),user_id)
        return user_service.select_balance(user_id)
    except InvalidInputType as e:
        raise HTTPException(status_code=400, detail=e.args[0])
        
    except NonExistingUser as e:
        raise HTTPException(status_code=404, detail=e.args[0])




