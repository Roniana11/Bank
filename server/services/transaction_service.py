from db.queries.transaction_queries import *
from db.models.transaction_model import Transaction
from .exceptions import *

from db.db_manager import DB_connection


class Transaction_service:

    def select_all_transactions(self, user_id: int) -> list:
        if type(user_id) is not int:
            raise InvalidInputType("Not a valid user id")
        try:
            transactions = DB_connection.execute_select(
                SELECT_TRANSACTIONS_BY_USER, {"user_id": user_id})
            return transactions
        except NonExistingUser as e:
            raise(e)

    def select_transactions_by_category(self, user_id: int) -> list:
        if type(user_id) is not int:
            raise InvalidInputType("Not a valid user id")
        try:
            transactions = DB_connection.execute_select(
                SELECT_TRANSACTIONS_BY_CATEGORY, {"user_id": user_id})
            return transactions
        except NonExistingUser as e:
            raise(e)

    def insert_transaction(self, transaction: Transaction) -> dict:
        try:
            if not transaction.is_deposit:
                transaction.amount = transaction.amount * -1
            transaction = DB_connection.execute_query(INSERT_TRANSACTION, {"amount": transaction.amount, "category": transaction.category, "vendor": transaction.vendor,"user_id":transaction.user_id})
            
            return transaction
        except InvalidInputType as e:
            raise(e)

    def delete_transaction(self, transaction_id: int) -> None:
        if type(transaction_id) is not int:
            raise InvalidInputType("Not a valid transaction id")
        try:
            DB_connection.execute_query(DELETE_TRANSACTION, {"id": transaction_id})
        except NonExistingTransaction as e:
            raise(e)

    def sum_user_transactions(self,user_id: int) -> int:
        if type(user_id) is not int:
            raise InvalidInputType("Not a valid user id")
        try:
            balance = DB_connection.execute_select(
                SUM_USER_TRANSACTIONS, {"user_id": user_id})
            return balance[0]["balance"]
        except NonExistingUser as e:
            raise(e)


    


transaction_service = Transaction_service()
