import { Box } from "@mui/material";
import Transaction from "./Transaction";

function Transactions({ transactions, onDelete }) {
  return (
    <Box>
      {transactions.map((t) => (
        <Transaction key={t.id} data={t} onDelete={onDelete}></Transaction>
      ))}
    </Box>
  );
}

export default Transactions;
