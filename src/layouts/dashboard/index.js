import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Siderbar from "./Siderbar";
import { useSelector } from "react-redux";

const DashboardLayout = () => {
    const {isLoggedIn,}=useSelector((state)=>state.auth)
   const [selected,setSelected]=useState(0);
if(!isLoggedIn) {
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
