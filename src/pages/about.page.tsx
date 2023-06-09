import Box from "@mui/material/Box";
import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const AboutPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Box height={50} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <h1>About Page</h1>
      </Box>
    </>
  );
};
export default AboutPage;
