import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/layout/NavBar";
import { Routes, Route } from "react-router-dom";
import { getBalance } from "./services/bankApi";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";

import HomePage from "./components/pages/HomePage";
import AddTransactionPage from "./components/pages/AddTransactionPage";
import InformationPage from "./components/pages/InformationPage";

function App() {
  const user = { id: 1, name: "lama" };
  const [balance, setBalance] = useState(0);
  const [showSnackBar, setShowSnackBar] = useState(false);

  const updateBalance = async () => {
    try {
      const data = await getBalance(user.id);
      setBalance(data.data[0].balance);
    } catch {
      setShowSnackBar(true);
    }
  };

  useEffect(() => {
    updateBalance();
  }, []);

  const closeSnackbarHandler = () => {
    setShowSnackBar(false);
  };

  return (
    <div className="App">
      <Header user={user} balance={balance}></Header>
      <Routes>
        <Route
          path="/"
          exact
          element={<HomePage userId={user.id} updateBalance={updateBalance} />}
        ></Route>
        <Route
          path="/operations"
          exact
          element={
            <AddTransactionPage
              userId={user.id}
              updateBalance={updateBalance}
            />
          }
        ></Route>
        <Route
          path="/information"
          exact
          element={<InformationPage userId={user.id} />}
        ></Route>
      </Routes>
      <Snackbar open={showSnackBar} autoHideDuration={6000} onClose={closeSnackbarHandler}>
        <Alert onClose={closeSnackbarHandler} severity="error" sx={{ width: "100%" }}>
        Couldn't load balance
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
