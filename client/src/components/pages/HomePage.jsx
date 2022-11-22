import Transactions from "../transactions/Transactions";
import React, { useState, useEffect } from "react";
import { getTransactions } from "../../services/bankApi";
import Page from "../layout/Page";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";

function HomePage({ userId, updateBalance }) {
  const [transactions, setTransactions] = useState([]);
  const [showSnackBar, setShowSnackBar] = useState(false);

  const fetchTransactions = async () => {
    try {
      const data = await getTransactions(userId);
      setTransactions(data.data);
    } catch {
      setShowSnackBar(true);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const deleteTransactionHandler = async () => {
    await fetchTransactions();
    updateBalance();
  };

  const closeSnackbarHandler = () => {
    setShowSnackBar(false);
  };

  return (
    <React.Fragment>
      <Page title="Transactions">
        <Transactions
          transactions={transactions}
          onDelete={deleteTransactionHandler}
        ></Transactions>
      </Page>
      <Snackbar
        open={showSnackBar}
        autoHideDuration={6000}
        onClose={closeSnackbarHandler}
      >
        <Alert
          onClose={closeSnackbarHandler}
          severity="error"
          sx={{ width: "100%" }}
        >
          Couldn't load transactions
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}

export default HomePage;
