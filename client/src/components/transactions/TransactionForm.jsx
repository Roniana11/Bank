import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import React, { useState } from "react";

import { addTransaction } from "../../services/bankApi";

function TransactionForm({userId,updateBalance }) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const [transaction, setTransaction] = useState({
    amount: 0,
    vendor: "",
    category: "",
    isDeposit: false,
  });

  const handleChange = (e) => {
    setTransaction((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDepositChange = (e) => {
    setTransaction((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };

  const sendTransactionHandler = async() => {
    const transactionData = {
      "amount": parseInt(transaction.amount),
      "vendor": transaction.vendor,
      "category": transaction.category,
      "is_deposit": +Boolean(transaction.isDeposit),
      "user_id": userId,
    };

    try{
      await addTransaction(transactionData)
      setShowSuccess(true)
      // updateBalance();
    }catch{
      setShowError(true)
    }
  };

  
  const closeSuccessHandler = () => {
    setShowSuccess(false);
  };
  const closeErrorHandler = () => {
    setShowError(false);
  };

  return (
    <React.Fragment>
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },display:"flex",flexDirection:"column"
      }}
    >
      <InputLabel htmlFor="vendor">Vendor</InputLabel>
      <OutlinedInput
        id="vendor"
        value={transaction.vendor}
        onChange={handleChange}
        label="vendor"
        name="vendor"
      />
      <InputLabel htmlFor="category">Category</InputLabel>
      <OutlinedInput
        id="category"
        value={transaction.category}
        onChange={handleChange}
        label="category"
        name="category"
      />
      <InputLabel htmlFor="amount">Amount</InputLabel>
      <OutlinedInput
        id="amount"
        type="number"
        value={transaction.amount}
        onChange={handleChange}
        endAdornment={<InputAdornment position="end">$</InputAdornment>}
        label="Amount"
        name="amount"
      />
      <FormControlLabel
        control={
          <Switch
            name="isDeposit"
            onChange={handleDepositChange}
          />
        }
        label="Deposit"
      />
      <Button onClick={sendTransactionHandler} variant="contained">
        SEND
      </Button>
    </Box>
          <Snackbar
          open={showSuccess}
          autoHideDuration={6000}
          onClose={closeSuccessHandler}
        >
          <Alert
            onClose={closeSuccessHandler}
            severity="success"
            sx={{ width: "100%" }}
          >
            Transaction Sent!
          </Alert>
        </Snackbar>
        <Snackbar
          open={showError}
          autoHideDuration={6000}
          onClose={closeErrorHandler}
        >
          <Alert
            onClose={closeErrorHandler}
            severity="error"
            sx={{ width: "100%" }}
          >
            Coulden't send transaction
          </Alert>
        </Snackbar>
        </React.Fragment>
  );
}

export default TransactionForm;
