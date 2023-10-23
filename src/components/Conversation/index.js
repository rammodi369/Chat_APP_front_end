
import { Stack, Box, Avatar, Typography, IconButton, Divider, TextField, InputAdornment, Input } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import { Badge } from '@mui/material';
import { faker } from '@faker-js/faker';
import { CaretDown, LinkSimple, MagnifyingGlass, PaperPlaneTilt, Phone, Smiley, VideoCamera } from 'phosphor-react';
import { useTheme } from '@mui/material/styles';
import Header from './Header';
import { Footer } from './Footer';
import Message from './Message';
const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
        paddingTop: "12px",
        paddingBottom: "12px"
    }
}))

const Conversation = () => {
    const theme = useTheme();
    return (
        <Stack height={"100%"} maxHeight={"100vh"} width={"auto"} >
            <Header />
            <Box width={"100%"} sx={{ flexGrow: 1,overflowY:"scroll" }}>
                  <Message/>
            </Box>

            <Footer />


        </Stack>
    )
}

export default Conversation
