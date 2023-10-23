import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Siderbar from "./Siderbar";

const DashboardLayout = () => {
   
   const [selected,setSelected]=useState(0);


  const theme = useTheme();
  console.log(theme);


  return (
    <Stack direction="row">

     <Siderbar/>
      <Outlet/>
    </Stack>
  );
};

export default DashboardLayout;
