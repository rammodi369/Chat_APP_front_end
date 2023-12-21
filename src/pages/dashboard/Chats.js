import React, { useEffect, useState } from "react";
import { Box, Typography, Stack, IconButton, InputBase, Button, Divider, Avatar, Badge } from '@mui/material'

import {
  ArchiveBox,
  CircleDashed,
  MagnifyingGlass,
  Users,
} from "phosphor-react";
import { styled, alpha } from "@mui/material/styles"
import { SimpleBarStyle } from "../../components/Scrollbar";
import { useTheme } from "@mui/material/styles";
import useResponsive from "../../hooks/useResponsive";

import { ChatList } from "../../data";
import { faker } from '@faker-js/faker'

import Friends from "../../Sections/main/Friends";
import { socket } from "../../socket";
import { useDispatch, useSelector } from "react-redux";
import { FetchDirectConversations } from "../../redux/Slices/Conversation";

const user_id = window.localStorage.getItem("user_id");

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.default, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  display:"flex"
  
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  height:"100%",
  padding: theme.spacing(0, 2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  

  position: "relative",
  PointerEvents: "none",
}))
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "&.MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc( 1em  +  ${theme.spacing(4)})`,
      width: "100%"
  }
}))
const ChatElement=({...el})=>{
  const theme =useTheme();
  return (
      <Box sx={{
          width:"100%",
         
          borderRadius:1,
          backgroundColor:theme.palette.mode==="light"?"#fff":theme.palette.background.default,
        
      }} p={2}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">

        <Stack direction="row" spacing={2}>
         { el.online ?
        <StyledBadge overlap="circular"anchorOrigin={{
vertical: 'bottom',
horizontal: 'right',
}}
          variant="dot"
          >
           <Avatar src={faker.image.avatar()}/>
           
          </StyledBadge>
           : <Avatar src={faker.image.avatar()}/>}

          <Stack spacing={0.3}>
              <Typography variant='subtitle2'>
                 {el.name}
              </Typography>
              <Typography variant='caption'>
                 {el.msg}
              </Typography>

          </Stack>
        </Stack>
        <Stack spacing={2} alignItems="center" >
     <Typography sx={{fontWeight:600}} variant='caption'>
  {el.time}
     </Typography>
     <Badge color='primary' badgeContent={1}>

     </Badge>
        </Stack>
          </Stack>
      </Box>
  )
}


const Chats = () => {
  const theme = useTheme();
  const isDesktop = useResponsive("up", "md");

  const dispatch = useDispatch();

  const {conversations} = useSelector((state) => state.conversation.direct_chat);



  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "100%",
          width: isDesktop ? 320 : "100vw",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background,

          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
    
        <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
          <Stack
            alignItems={"center"}
            justifyContent="space-between"
            direction="row"
          >
            <Typography variant="h5">Chats</Typography>

            <Stack direction={"row"} alignItems="center" spacing={1}>
              <IconButton
                onClick={() => {
                  handleOpenDialog();
                }}
                sx={{ width: "max-content" }}
              >
                <Users />
              </IconButton>
              <IconButton sx={{ width: "max-content" }}>
                <CircleDashed />
              </IconButton>
            </Stack>
          </Stack>
          <Stack sx={{ width: "100%" }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Stack>
          <Stack spacing={1}>
            <Stack direction={"row"} spacing={1.5} alignItems="center">
              <ArchiveBox size={24} />
              <Button variant="text">Archive</Button>
            </Stack>
            <Divider />
          </Stack>
          <Stack sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}>
            <SimpleBarStyle timeout={500} clickOnTrack={false}>
              <Stack spacing={2.4}>
                <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                  Pinned
                </Typography> 
                 {ChatList.filter((el) => el.pinned).map((el, idx) => {
                  return <ChatElement {...el} />;
                })}
                <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                  All Chats
                </Typography>
            
                {ChatList.filter((el) => !el.pinned).map((el, idx) => {
                  return <ChatElement {...el} />;
                })}
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
      </Box>
      {openDialog && (
        <Friends open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
};

export default Chats;