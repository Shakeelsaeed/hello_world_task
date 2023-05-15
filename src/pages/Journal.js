import React from "react";
import NavBar from "../components/NavBar";
import { Box } from "@mui/material";
import ClientList from "../components/ClientList";
import Journels from "../components/Journels";
import JournelEntry from "../components/JournelEntry";
export default function Journel() {
  return (
    <>
      <NavBar />
      <Box
        component="div"
        display="flex"
        sx={{ background: "#F6F6F6", height: "100vh" }}
      >
        <ClientList />
        <Journels />
        <JournelEntry />
      </Box>
    </>
  );
}
