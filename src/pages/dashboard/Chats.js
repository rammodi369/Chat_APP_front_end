import React from 'react'
import { Box, Typography, Stack, IconButton, InputBase, Button, Divider, Avatar, Badge } from '@mui/material'
import { Archive, ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react'
import { styled, alpha } from "@mui/material/styles"
import { useTheme } from '@mui/material/styles'
import { faker } from '@faker-js/faker'
import { ChatList } from '../../data'
import { SimpleBarStyle } from '../../components/Scrollbar'

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
const Chats = () => {
    const theme = useTheme();
    return (
        <Box sx={{ position: "relative ", width: 320, backgroundColor: theme.palette.mode==="light"?"#f8fAff":theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0,0,0,0.25)" }}>
            <Stack p={4} spacing={2} sx={{height:"100vh"}}>

                <Stack direction="row" alignItems="center" justifyContent="space-between"
                >
                    <Typography variant='h5'>
                        chats
                    </Typography>
                    <IconButton>
                        <CircleDashed />
                    </IconButton>
                </Stack>
                <Stack sx={{ width: "100%" }}>
                    <Search >
                        <SearchIconWrapper>
                            <MagnifyingGlass color='#709ce6'  height={"40px"} />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder='              search' inputProps={{ "aria-label": "search" }} />
                    </Search>
                </Stack>
                <Stack spacing={1}>
                    <Stack direction="row" alignItems="center" spacing={1.5}>

                        <ArchiveBox size={24} />
                        <Button>
                            Archive
                        </Button>
                    </Stack>
                    <Divider />
                </Stack>
                <Stack direction="column" sx={{flexGrow:1,overflowY:"scroll",height:"100%"}}>
               <SimpleBarStyle timout={500} clickOnTrack={false}>
               <Stack spacing={2.4}>
                 <Typography variant='subtitle2' sx={{color:"#676767"}}>
                    Pinned
                 </Typography>
            {ChatList.filter((el) =>el.pinned).map((el)=>{
               return <ChatElement {...el}/>
            })
                             
            }
 
             </Stack>
             <Stack spacing={2.4}>
                 <Typography variant='subtitle2' sx={{color:"#676767"}}>
                 All chats
                 </Typography>
            {ChatList.filter((el) => !el.pinned).map((el)=>{
               return <ChatElement {...el}/>
            })
                             
            }
 
             </Stack>
               </SimpleBarStyle>
       
                
                </Stack>
     
                
            </Stack>
        </Box>
    )
}

export default Chats
