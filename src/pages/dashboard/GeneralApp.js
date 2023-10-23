import React from "react";
import { Box, Stack } from "@mui/material";
import Chats from "./Chats";
import Conversation from "../../components/Conversation";
import { useTheme } from "@emotion/react";
import Contanct from "../../components/Contanct";
import { useSelector } from "react-redux";
import SharedMessge from "../../components/SharedMessge";
const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app)

  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      <Chats />
      {/* conversation */}
      <Box sx={{ height: "100%", width: sidebar.open ? "calc(100vw - 740px)" : " calc(100vw - 420px) ", backgroundColor: theme.palette.mode === "light" ? " #f0f4fa" : theme.palette.background.default }}>
        <Conversation />
      </Box>
      {sidebar.open && (() => {
        switch (sidebar.type) {
          case "CONTACT":
            return <Contanct />;
          case "SHARED":
            return <SharedMessge />;
          default:
         
            break;
        }
      })()}
    </Stack>
  );
};

export default GeneralApp;
