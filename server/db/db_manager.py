import mysql.connector
from .config import db_config

class DBConnection():

    initialized = False
    _instance = None

    def __new__(cls,config, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super(DBConnection,cls).__new__(cls, *args, **kwargs)
        return cls._instance


    def __init__(self, config, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if not self.initialized:
            self.initialized = True
            self.config = config

    def connect(self):
        self.my_db = mysql.connector.connect(host=self.config["host"], user=self.config["user"],
                                        password=self.config["password"], charset=self.config["charset"], database=self.config["database"])
        self.my_cursor = self.my_db.cursor(dictionary=True)
        return True

    def execute_query(self,query,params):
        self.connect()
        self.my_cursor.execute(query,params)
        self.my_db.commit()
        self.my_db.close()

    def execute_select(self,query,params):
        self.connect()
        self.my_cursor.execute(query,params)
        result = self.my_cursor.fetchall()
        self.my_db.close()
        return result

    
DB_connection = DBConnection(db_config)