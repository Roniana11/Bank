import axios from "axios";
const URL = "http://localhost:8000/";

export function getBalance(userId) {
  return axios.get(URL + "users", {
    headers: {
      Authorization: userId,
    },
  });
}

export function getTransactions(userId) {
  return axios.get(URL + "transactions", {
    headers: {
      Authorization: userId,
    },
  });
}

export function getTransactionsByCategory(userId) {
  return axios.get(URL + "transactions?category=1", {
    headers: {
      Authorization: userId,
    },
  });
}

export function addTransaction(transaction) {
  return axios.post(URL + "transactions",{...transaction});
}

export function deleteTransaction(transactionId) {
    return axios.delete(URL + `transactions/${transactionId}`);
}
