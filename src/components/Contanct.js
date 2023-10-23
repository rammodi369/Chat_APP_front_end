import React from 'react'
import { Box, IconButton, Stack, Typography, Avatar, Icon, Divider, Button, Switch, Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions } from '@mui/material'

import { useTheme } from '@mui/material/styles'

import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, X } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { toggleSiderbar, updateSidebarType } from '../redux/Slices/app';
import { faker } from '@faker-js/faker';
import { useState } from 'react';



const BlockDialog= ({open, handleClose})=>{


 
    return (<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Block this contact
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Are you want to block this contact
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>cancel</Button>
          <Button onClick={handleClose} autoFocus>
       Yes
          </Button>
        </DialogActions>
      </Dialog>
        
    )
}
const DeleteDialog=({open, handleClose})=>{
   

    
  
    
    return (<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Delete this contact
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Are you sure you want to delete chat?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>cancel</Button>
          <Button onClick={handleClose} autoFocus>
       Yes
          </Button>
        </DialogActions>
      </Dialog>
        
    )
}



const Contanct = () => {
    const theme = useTheme();
    const dispatch = useDispatch()
    const [openBlock, setOpenBlock]=useState(false)
    const [openDelete, setOpenDelete]=useState(false)
    const handleCloseBlock=()=>{
        setOpenBlock(false);
    }
    const handleCloseDelete=()=>{
        setOpenDelete(false);
    }
    return (
        <Box sx={{ width: 320, height: "100vh" }}>
            <Stack sx={{ height: "100%" }}>
                <Box sx={{
                    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.25)",
                    width: "100%",
                    backgroundColor: theme.palette.mode === "light" ? "#f8faff" : theme.palette.background,

                }}>
                    <Stack direction="row" sx={{ heigth: "100%", p: 2 }} alignItems={"center"} justifyContent="space-between" spacing={3}>
                        <Typography variant="subtitle2">
                            Contact Info
                        </Typography>
                        <IconButton onClick={() => {
                            dispatch(toggleSiderbar());
                        }}>
                            <X />
                        </IconButton>
                    </Stack>
                </Box>


                {/* body */}
                <Stack sx={{ height: "100%", position: "relative", flexGrow: 1, overflowY: "scroll" }} spacing={3} p={3}>
                    <Stack alignItems={"center"} direction={"row"} spacing={2}>
                        <Avatar src={faker.image.avatar()} alt={faker.name.firstName()} sx={{ height: 64, width: 64 }} />
                        <Stack spacing={0.5}>
                            <Typography variant='article' fontWeight={600}>
                                {faker.name.fullName()}
                            </Typography>
                            <Typography variant='body2' fontWeight={500}>
                                {"+91 92140 5305"}
                            </Typography>
                        </Stack>
                    </Stack>

                    <Stack direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-evenly"}
                    >
                        <Stack spacing={1} alignItems={"center"}>
                            <IconButton>
                                <Phone />
                            </IconButton>
                            <Typography variant='overline'>
                                voice
                            </Typography>
                        </Stack>
                        <Stack spacing={1} alignItems={"center"}>
                            <IconButton>
                                <VideoCamera />
                            </IconButton>
                            <Typography variant='overline'>
                                video
                            </Typography>
                        </Stack>
                    </Stack>
                    <Divider />
                    <Stack spacing={0.5}>
                        <Typography variant='article'>
                            About
                        </Typography>
                        <Typography variant='body2'>
                            HI there , i am using
                        </Typography>
                    </Stack>
                    <Divider />
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between "}>
                        <Typography variant='subtitle2'>
                            Media, LInks, & Docs
                        </Typography>
                        <Button onClick={()=>{
                            dispatch(updateSidebarType("SHARED"));
                        }} endIcon={<CaretRight />}>
                            401
                        </Button>

                    </Stack>
                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                        {[1, 2, 3].map((el) => (
                            <Box>
                                <img src={faker.image.food()} alt={faker.name.firstName()} />
                            </Box>
                        ))

                        }
                    </Stack>
                    <Divider />
                
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>

                        <Stack direction={"row"} alignItems={"center"} spacing={2}>
                            <Bell size={21} />
                            <Typography variant="subtitle2">
                                Mute Notification
                            </Typography>
                        </Stack>
                      <Switch></Switch>
                    </Stack>
                    <Divider/>
                    <Typography>
                        1 group in common 
                    </Typography>
                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                        <Avatar src={faker.image.avatar()} alt={faker.name.fullName()}/>
                        <Stack spacing={0.5}>
                             <Typography variant="subtitle2">
                                Coding Monk
                             </Typography>
                             <Typography variant='caption'> 
                                you
                             </Typography>
                        </Stack>
                    </Stack>
                        <Stack direction={"row"} alignItems={"center"} spacing={2}>
                              <Button startIcon={<Prohibit/>} fullWidth variant='outlined' onClick={()=>{
                               setOpenBlock(true);
                              }}>
                                Block
                              </Button>
                              <Button startIcon={<Trash/>} fullWidth variant='outlined'
                              onClick={()=>{
                            setOpenDelete(true)
                               }}
                               >
                                Delete
                              </Button>
                        </Stack>

                </Stack>

            </Stack>
                   {
                    openBlock&& (<BlockDialog open={openBlock} handleClose={handleCloseBlock}/>)
                   }
                   {
                    openDelete&& (<DeleteDialog open={openDelete} handleClose={handleCloseDelete}/>)
                   }
        </Box>
    )
}

export default Contanct
