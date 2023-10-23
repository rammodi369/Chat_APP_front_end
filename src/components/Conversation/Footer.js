import React from 'react'

import { Stack, Box, IconButton, TextField, InputAdornment, Tooltip } from '@mui/material'
import { CaretDown, LinkSimple, MagnifyingGlass, PaperPlaneTilt, Phone, Smiley, VideoCamera } from 'phosphor-react';
import { styled, useTheme } from '@mui/material/styles';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useState } from 'react';
import {
    Camera,
    File,
    Image,



    Sticker,
    User,
} from "phosphor-react";
import { Fab } from '@mui/material';
const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
        paddingTop: "12px",
        paddingBottom: "12px"
    }
}))

const ChatInput = ({ setPicker }) => {
    const [openAction,setOpenActions]=useState(false);
    const Actions = [
        {
            color: "#4da5fe",
            icon: <Image size={24} />,
            y: 102,
            title: "Photo/Video",
        },
        {
            color: "#1b8cfe",
            icon: <Sticker size={24} />,
            y: 172,
            title: "Stickers",
        },
        {
            color: "#0172e4",
            icon: <Camera size={24} />,
            y: 242,
            title: "Image",
        },
        {
            color: "#0159b2",
            icon: <File size={24} />,
            y: 312,
            title: "Document",
        },
        {
            color: "#013f7f",
            icon: <User size={24} />,
            y: 382,
            title: "Contact",
        },
    ];
    return (

        <StyledInput fullWidth placeholder='Write a message.....' variant='filled' InputProps={{
            disableUnderline: true,
            startAdornment:(
                <Stack sx={{ width: "max-content" }} >
                    <Stack sx={{ position: "relative" ,display:openAction?"inline":"none"}}>
                        {
                            Actions.map((el) => (
                                <Tooltip title={el.title} placement='right'>

                                <Fab sx={{ position: "absolute", top: -el.y, backgroundColor: el.color }}>
                                    {el.icon}
                                </Fab>
                                </Tooltip>
                            ))
                        }
                    </Stack>
                    <InputAdornment onClick={()=>{
                        setOpenActions((prev)=>!prev)
                    }}>
                        <IconButton>
                            <LinkSimple />
                        </IconButton>
                    </InputAdornment>
                </Stack>),
            endAdornment: <InputAdornment>
                <IconButton>
                    <Smiley onClick={() => {
                        setPicker((prev) => !prev);
                    }} />
                </IconButton>
            </InputAdornment>

        }} />
    )
}
const Footer = () => {
    const theme = useTheme()
    const [onPicker, setPicker] = useState(false);

    return (
        <Box
            p={2}
            sx={{
                width: "100%", backgroundColor: theme.palette.mode === "light" ? "#F8faff" : theme.palette.background.paper,
                boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
            }}>
            <Stack direction="row" alignItems={"center"} spacing={3}>
                <Stack sx={{ width: "100%" }}>

                    <Box sx={{ display: onPicker ? "inline" : "none", zIndex: 10, position: "fixed", bottom: 81, right: 100 }}>

                        <Picker theme={theme.palette.mode} data={data} onEmojiSelect={console.log} />
                    </Box>

                    <ChatInput setPicker={setPicker} />
                </Stack>
                <Box sx={{ height: 48, width: 48, borderRadius: 1.5, backgroundColor: theme.palette.primary.main }}>
                    <Stack sx={{ height: "100%", width: "100%" }} alignItems={"center"} justifyContent={"center"}>



                        <IconButton>
                            <PaperPlaneTilt color='#fff' />
                        </IconButton>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export { Footer, ChatInput }
