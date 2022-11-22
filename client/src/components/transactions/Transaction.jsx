import Card from "@mui/material/Card";
import { Box, Typography, Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import Chip from '@mui/material/Chip';
import { deleteTransaction } from "../../services/bankApi";

function Transaction({ onDelete, data }) {
  const { id, vendor, amount, category, isDeposite } = data;

  const deleteTransactionHandler = (id) => {
    deleteTransaction(id).then(onDelete);
  };

  return (
    <Card
      id={id}
      sx={{ m: 2 }}
    >
      <CardContent sx={{ display: "flex", flex: "1 0 auto", justifyContent: "space-between",alignItems:"center"}}>
        <Box sx={{ display: "flex",flexDirection:"column" }}>
          <Typography component="div" variant="h5">
            {vendor}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {category}
          </Typography>
          </Box>
          <Box>
          <Chip label={`${amount} $`} color={amount < 0 ? "error": "success"}>
          </Chip>
        </Box>
        <Box>
          <Button
            onClick={() => deleteTransactionHandler(id)}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Transaction;
