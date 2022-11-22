import { Paper } from "@mui/material";
import Page from "../layout/Page";
import { useState,useEffect} from "react";
import {getTransactionsByCategory} from '../../services/bankApi';

function InformationPage({userId}) {
  const [information, setInformation] = useState([]);
  
  useEffect(() => {
    getTransactionsByCategory(userId).then((data) => {
      setInformation(data.data);
    });
  }, []);

  return (
    <Page title="Information">
      {information.map((i) => (
        <Paper elevation={4}>
          {i.category}: {i.total}
        </Paper>
      ))}
    </Page>
  );
}

export default InformationPage;
