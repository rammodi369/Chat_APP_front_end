import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Siderbar from "./Siderbar";
import { useSelector } from "react-redux";

const DashboardLayout = () => {
    const {isLoggedIn,}=useSelector((state)=>state.auth)
   const [selected,setSelected]=useState(0);





  return (
    <Stack direction="row">

     <Siderbar/>
      <Outlet/>
    </Stack>
  );
};

export default DashboardLayout;