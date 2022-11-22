import Page from "../layout/Page";
import TransactionForm from "../transactions/TransactionForm";

function AddTransactionPage({userId,updateBalance}) {
  return (
    <Page title="Add new transaction">
      <TransactionForm userId={userId} updateBalance={updateBalance}></TransactionForm>
    </Page>
  );
}

export default AddTransactionPage;
