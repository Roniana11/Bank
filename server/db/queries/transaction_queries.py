SELECT_TRANSACTIONS_BY_USER = "SELECT * FROM transaction WHERE user_id=%(user_id)s"
SELECT_TRANSACTIONS_BY_CATEGORY ="SELECT category, SUM(amount) AS total FROM transaction WHERE user_id=%(user_id)s GROUP BY category"

INSERT_TRANSACTION ="INSERT INTO transaction VALUES(null,%(amount)s,%(vendor)s,%(category)s,%(user_id)s)"

DELETE_TRANSACTION = "DELETE FROM transaction WHERE id=%(id)s"

SUM_USER_TRANSACTIONS ="SELECT SUM(amount) AS balance FROM transaction WHERE user_id=%(user_id)s"