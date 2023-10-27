
import { Box, Stack, Typography, InputBase, Link, IconButton, Divider, Avatar, Badge } from '@mui/material'
import React ,{useState} from 'react'
import { styled, alpha, useTheme } from "@mui/material/styles"
import { MagnifyingGlass, Phone, Plus } from 'phosphor-react';
import { SimpleBarStyle } from '../../components/Scrollbar';

import { CallElement } from '../../components/CallElement';
import { CallLogs, ChatList } from '../../data';
import StartCall from '../../Sections/main/StarCall';



const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.background.default, 1),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    display: "flex"

}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
    height: "100%",
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

const Call = () => {
    const theme=useTheme()
    const [openDialog,setOpenDialog]=useState(false)
    const handleCloseDialog=()=>{
        setOpenDialog(false);
    }
  return (
   <>
     <Stack direction={"row"} sx={{ width: "100%" }}>
                <Box sx={{
                    height: "100vh",
                    backgroundColor: (theme) => theme.palette.mode === "light" ? "#f8faff" : theme.palette.paper,
                    width: 320,
                    boxShadow: "0px 0px 2px rgba(0,0,0,0.25)"
                }}>
                    <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
                        <Stack >
                            <Typography variant='h5' > Call Logs</Typography>
                        </Stack>
                        <Stack sx={{ width: "100%", }} >
                            <Search >
                                <SearchIconWrapper>
                                    <MagnifyingGlass color='#709ce6' height={"40px"} />
                                </SearchIconWrapper>
                                <StyledInputBase placeholder='search' inputProps={{ "aria-label": "search" }} />
                            </Search>
                        </Stack>
                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}  >
                            <Typography variant='subtitle2' component={Link}>
                              Start Conversation
                            </Typography>
                            <IconButton onClick={()=>{
                                setOpenDialog(true);
                            }} >
                                <Phone style={{ color: theme.palette.primary.main }} />
                            </IconButton>
                        </Stack>
                        <Divider />
                            <Stack spacing={3} sx={{flexGrow:1, overflowY:"scroll", height:"100%"}} >
                                <SimpleBarStyle timeout={500} clickOnTrack={false}>
                                   <Stack spacing={2.5}>
                                        <Typography variant='subtitle2' sx={{color:"#676667"}}>
                                                Pinned
                                        </Typography>
                                        {CallLogs.map((el)=>{
               return      <CallElement {...el} />
            })
                             
            }
                                       
                                   </Stack>
                                </SimpleBarStyle>
                            </Stack>
                    </Stack>
                </Box>
            </Stack>
           {openDialog && <StartCall open={openDialog} handleClose={handleCloseDialog} />}
   </>
  )
}

export default Call
