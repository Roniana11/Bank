from db.queries.user_queries import *
from .exceptions import *

from db.db_manager import DB_connection


class User_service:

    def select_balance(self,user_id: int) -> list:
        if type(user_id) is not int:
            raise InvalidInputType("Not a valid user id")
        try:
            balance = DB_connection.execute_select(SELECT_USER_BALANCE,{"user_id": user_id})
            return balance
        except NonExistingUser as e:
            raise(e)

    def update_balance(self,balance:int,user_id:int) -> int:
        if type(user_id) is not int:
            raise InvalidInputType("Invalid user id type")
        if type(balance) is not int:
            print(type(balance))
            raise InvalidInputType("Invalid balance type")
        try:
            DB_connection.execute_query(UPDATE_USER_BALANCE,{"balance":balance,"user_id": user_id})
        except NonExistingUser as e:
            raise(e)



user_service = User_service()