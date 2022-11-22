import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import classes from './Page.module.css'


function Page({ title, children }) {
  return (
    <Box className={classes.page}>
      <Typography variant="h3" >{title}</Typography>
      <Paper className={classes["page-content-container"]} elevation={4} p={4}>{children}</Paper>
    </Box>
  );
}

export default Page;
