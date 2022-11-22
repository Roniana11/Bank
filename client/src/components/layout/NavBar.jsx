import { useState,useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link"
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


function Header({ user, balance}) {

  console.log("header render",balance)
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link href="/">
              <Button sx={{ color: "#fff" }}>
                Transactions
              </Button>
            </Link>
            <Link href="/operations">
              <Button sx={{ color: "#fff" }}>
                Operations
              </Button>
            </Link>
            <Link href="/information">
              <Button sx={{ color: "#fff" }}>
                Information
              </Button>
            </Link>
          </Box>
          <Box>
            <Typography variant="h6" component="div">
              Balance: {balance}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Header;
