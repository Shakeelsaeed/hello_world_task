import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Loogo from "../assets/Logo.PNG";

const Logo = () => {
  return (
    <Box>
      <Link to="/">
        <Box component="img" src={Loogo} alt="logo" />
      </Link>
    </Box>
  );
};

export default Logo;
