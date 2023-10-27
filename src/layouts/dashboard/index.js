import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Siderbar from "./Siderbar";
const isAuthenticate=true;
const DashboardLayout = () => {
   
   const [selected,setSelected]=useState(0);
if(!isAuthenticate){
  return <Navigate to="/auth/login" />
}




  return (
    <Stack direction="row">

     <Siderbar/>
      <Outlet/>
    </Stack>
  );
};

export default DashboardLayout;
