use bank_app;
-- import mysql.connector

-- my_db = mysql.connector.connect(
--     host="localhost",
--     user="root",
--     password="",
--     charset='utf8'
--     database="bank_app"
-- )

-- my_cursor = my_db.cursor()

-- CREATE DATABASE IF NOT EXISTS bank_app
-- CREATE TABLE IF NOT EXISTS user(
--     id INT NOT NULL AUTO_INCREMENT,
--     balance INT,
--     PRIMARY KEY(id)
--     );

-- CREATE TABLE IF NOT EXISTS transaction(
--     id INT NOT NULL AUTO_INCREMENT,
--     amount INT,
--     vendor VARCHAR(20),
--     category VARCHAR(20),
--     user_id INT NOT NULL,
--     PRIMARY KEY(id),
--     FOREIGN KEY(user_id) REFERENCES user(id)
--     );

Insert into transaction values(null,-100,"Cat food",'Food',1);
-- Insert into transaction values(null,300,"Dog food",'Food',0,1);
Insert into transaction values(null,2000,"Salery",'Work',1);
-- Insert into transaction values(null,100,"restaurant",'extra',0,1);

-- Drop table transaction
-- CREATE TABLE IF NOT EXISTS user(id INT NOT NULL AUTO INCREMENT PRIMARY KEY, name VARCHAR(20) )
-- CREATE TABLE IF NOT EXISTS user_transaction(user_id INT NOT NULL,transaction_id INT NOT NULL,FOREIGN KEY(user_id)) REFERENCES user(id),FOREIGN KEY(transaction_id)) REFERENCES transaction(id),PRIMARY KEY(user_id,transaction_id)

