import { Box, Stack, useTheme, IconButton, Typography, Tabs, Tab, Grid } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { CaretLeft, X } from 'phosphor-react';
import { updateSidebarType } from '../redux/Slices/app';
import { faker } from '@faker-js/faker';
import { SHARED_DOCS, SHARED_LINKS } from '../data';
import { DocMsg, LinkMsg } from './Conversation/MessageTypes';

const SharedMessge = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ height: "100vh", width: 320 }}>
            <Stack sx={{ height: "100%" }}>
                <Box sx={{
                    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.25)",
                    width: "100%",
                    backgroundColor: theme.palette.mode === "light" ? "#f8faff" : theme.palette.background,

                }}>
                    <Stack direction="row" sx={{ heigth: "100%", p: 2 }} alignItems={"center"} spacing={3}>
                        <IconButton onClick={() => {
                            dispatch(updateSidebarType("CONTACT"));
                        }}>
                            <CaretLeft />
                        </IconButton>
                        <Typography variant="subtitle2">
                            Media
                        </Typography>
                    </Stack>
                </Box>
                <Tabs sx={{ px: 3, pt: 2 }} value={value} onChange={handleChange} centered>
                    <Tab label="Media" />
                    <Tab label="Links" />
                    <Tab label="Docs" />
                </Tabs>
                <Stack
                    sx={{
                        height: "100%",
                        position: "relative",
                        flexGrow: 1,
                        overflowY: "scroll",

                    }}
                    spacing={ value===1? 1 : 3}
                    p={3}
                >
                    {
                        (() => {
                            switch (value) {
                                case 0:
                                    return (
                                        <Grid container spacing={2}>
                                            {
                                                [0, 1, 2, 3, 4, 5, 6].map((el) => (
                                                    <Grid item xs={4}>
                                                        <img src={faker.image.avatar()} alt={faker.name.fullName()} />
                                                    </Grid>
                                                ))
                                            }
                                        </Grid>
                                    )
                                case 1:
                                return SHARED_LINKS.map((el)=><LinkMsg el={el}/>)
                                case 2:
                               return SHARED_DOCS.map((el)=> <DocMsg el={el}/>)

                                default:
                                    break;
                            }
                        })
                            ()
                    }

                </Stack>
            </Stack>
        </Box>
    )
}

export default SharedMessge
