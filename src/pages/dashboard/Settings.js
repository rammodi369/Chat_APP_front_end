import { Box, IconButton, Stack, Typography, useTheme ,Avatar, Divider} from '@mui/material'
import { Bell, CaretLeft, CaretRight, Image, Info, Key, Keyboard, Lock, Note, PencilCircle } from 'phosphor-react';
import React from 'react'

import { faker } from '@faker-js/faker';
import Shortcuts from '../../Sections/settings/Shortcuts';
import { useState } from 'react';

const Settings = () => {
    const theme = useTheme();
    const [openShortcuts, setOpenShortCuts]=useState(false);
    const handleOpenShortcuts=()=>{
        setOpenShortCuts(true);
    }
    const handleCloseShortcuts=()=>{
        setOpenShortCuts(false);
    }
    const list = [
        {
          key: 0,
          icon: <Bell size={20} />,
          title: "Notifications",
          onclick: () => {},
        },
        {
          key: 1,
          icon: <Lock size={20} />,
          title: "Privacy",
          onclick: () => {},
        },
        {
          key: 2,
          icon: <Key size={20} />,
          title: "Security",
          onclick: () => {},
        },
        {
          key: 3,
          icon: <PencilCircle size={20} />,
          title: "Theme",
        //   onclick: handleOpenTheme,
        onclick:()=>{}
        },
        {
          key: 4,
          icon: <Image size={20} />,
          title: "Chat Wallpaper",
          onclick: () => {},
        },
        {
          key: 5,
          icon: <Note size={20} />,
          title: "Request Account Info",
          onclick: () => {},
        },
        {
          key: 6,
          icon: <Keyboard size={20} />,
          title: "Keyboard Shortcuts",
       
          onclick: handleOpenShortcuts,
        },
        {
          key: 7,
          icon: <Info size={20} />,
          title: "Help",
          onclick: () => {},
        },
      ];
    return (
        <>
            <Stack direction={"row"} sx={{ width: "100%" }}>
                {/* left panel */}
                <Box sx={{
                    overflowY: "scroll", height: "100vh", width: 320, backgroundColor: theme.palette.mode === "light" ? "f8faff" : theme.palette.background,
                    boxShadow: "0px 0px 2px rgba(0,0,0,0.25)"
                }}>
                    <Stack p={4} spacing={5}>
                        <Stack direction={"row"} alignItems={"center"} spacing={3}>
                            <IconButton>
                                <CaretLeft size={24} color='#484B4b' />
                            </IconButton>
                            <Typography variant='h6'>
                                Settings
                            </Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={3}>
                                           <Avatar sx={{width:54, height:54,}} src={faker.image.avatar()} alt={faker.name.fullName()}/>
                                           <Stack spacing={0.5} >
                                                 <Typography variant='article'>
                                                        {faker.name.fullName()}
                                                 </Typography>
                                                 <Typography variant='body2'>
                                                        {faker.random.words()}
                                                 </Typography>
                                           </Stack>
                        </Stack>
                        <Stack spacing={4}>
                            {list.map((el)=>
                            <>
                            <Stack  sx={{cursor:"pointer"}} spacing={2}   onClick={el.onclick}>
                                      <Stack direction={"row"} spacing={2} alignItems={"center"}>
                                        {el.icon}
                                        <Typography variant='body2' >{el.title}</Typography>
                                      </Stack>
                                      <Divider/> 
                            </Stack>
                            </>
                            )}

                        </Stack>
                    </Stack>

                </Box>
            </Stack>
            <Shortcuts open={openShortcuts} handleclose={handleCloseShortcuts} />
        </>
    )
}

export default Settings
