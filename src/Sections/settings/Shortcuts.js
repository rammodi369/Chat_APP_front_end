import { Dialog , DialogContent, DialogTitle, Grid, Slide, Slider,Stack, Box, Typography, Button, DialogActions } from '@mui/material'

import React from 'react'
import { forwardRef } from 'react'


const Transition=forwardRef(function Transition(props, ref){
    return <Slide direction='up' ref={ref} {...props}/>
})

const Shortcuts = ({open, handleclose}) => {
    const list = [
        {
          key: 0,
          title: "Mark as unread",
          combination: ["Cmd", "Shift", "U"],
        },
        {
          key: 1,
          title: "Mute",
          combination: ["Cmd", "Shift", "M"],
        },
        {
          key: 2,
          title: "Archive Chat",
          combination: ["Cmd", "Shift", "E"],
        },
        {
          key: 3,
          title: "Delete Chat",
          combination: ["Cmd", "Shift", "D"],
        },
        {
          key: 4,
          title: "Pin Chat",
          combination: ["Cmd", "Shift", "P"],
        },
        {
          key: 5,
          title: "Search",
          combination: ["Cmd", "F"],
        },
        {
          key: 6,
          title: "Search Chat",
          combination: ["Cmd", "Shift", "F"],
        },
        {
          key: 7,
          title: "Next Chat",
          combination: ["Cmd", "N"],
        },
        {
          key: 8,
          title: "Next Step",
          combination: ["Ctrl", "Tab"],
        },
        {
          key: 9,
          title: "Previous Step",
          combination: ["Ctrl", "Shift", "Tab"],
        },
        {
          key: 10,
          title: "New Group",
          combination: ["Cmd", "Shift", "N"],
        },
        {
          key: 11,
          title: "Profile & About",
          combination: ["Cmd", "P"],
        },
        {
          key: 12,
          title: "Increase speed of voice message",
          combination: ["Shift", "."],
        },
        {
          key: 13,
          title: "Decrease speed of voice message",
          combination: ["Shift", ","],
        },
        {
          key: 14,
          title: "Settings",
          combination: ["Shift", "S"],
        },
        {
          key: 15,
          title: "Emoji Panel",
          combination: ["Cmd", "E"],
        },
        {
          key: 16,
          title: "Sticker Panel",
          combination: ["Cmd", "S"],
        },
      ];
      
  return (
    <>
    <Dialog fullWidth maxWidth="md" open={open} onClose={handleclose}   TransitionComponent={Transition} keyMounted  sx={{p:4,}}>
    <DialogTitle>
        Keyboard Shortcuts
    </DialogTitle>
    <DialogContent sx={{mt:4}} >
         <Grid container spacing={3}  >
                    {
                        list.map((el)=>
                        <>
                       

                        <Grid item xs={6}>
                            <Stack sx={{width:"100%",}} justifyContent={"space-between"} spacing={3} direction={"row"} alignItems={"center"}>
                                     <Typography variant='caption' sx={{fontSize:14}}>
                                        {el.title}
                                     </Typography>
                                     <Stack
                                     spacing={2} direction={"row"}
                                     >
                                        {
                                            el.combination.map((el1)=>{
                                                return <Button disabled variant='contained' sx={{color:"#212121"}} >
                                                    {el1}
                                                </Button>
                                            })
                                        }
                                     </Stack>
                            </Stack>
                        </Grid>
                       
                        </>
                        )
                    }
         </Grid>
    </DialogContent>
    <DialogActions>
        <Button variant='contained' onClick={handleclose}>
            Ok
        </Button>
    </DialogActions>
    </Dialog>
    </>
  )
}

export default Shortcuts
