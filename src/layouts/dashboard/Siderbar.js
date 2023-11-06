import React from 'react'
import { faker } from "@faker-js/faker";
import {useTheme} from '@mui/material';
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons, Profile_Menu } from "../../data";
import { useState } from 'react';
import { Avatar, Box ,Divider,IconButton,Stack ,Switch,Menu, MenuItem} from "@mui/material";
import useSettings from "../../hooks/useSettings"
import { Gear } from "phosphor-react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LogoutUser } from '../../redux/Slices/auth';

const getPath=(index)=>{
  switch(index){
    case 0:
    return "/app";
    case 1:
    return "/group";
    case 2:
    return "/call";
    case 3:
    return "/settings";

      default:
        break;
  }
}
const getMenu=(index)=>{
switch (index){
  case 0:
    return "/profile"
    case 1:
      return "/settings"
      case2:
      return "/auth/login"
    default:
      break;
}
}

const Siderbar = () => {
  const dispatch=useDispatch()
  const Navigate=useNavigate();
    const [selected,setSelected]=useState(0);
    const theme=useTheme();
    const {onToggleMode } =useSettings();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
   
      
      <Box p={2} sx={{ backgroundColor: theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0,0,0,0.25)", height: "100vh", width: "100px" }}>
        <Stack direction="column" alignItems={"center"} sx={{height:"100%"}} spacing={3}
        justifyContent="space-between"
        >
               <Stack alignItems={"center"} spacing={4}>
        <Box
         
          sx={{
            backgroundColor: theme.palette.primary.main,
            height: "64px",
            width: "64px",
            borderRadius: 1.5
          }}
        >
          <img src={Logo} alt="chat app" onClick={()=>{
            Navigate("/")
          }} />
        </Box>
        <Stack spacing={3} sx={{width:"max-content"}} direction="column" alignItems="center" >
        {Nav_Buttons.map((el)=>
        (       
          el.index === selected ?
          <Box p={.5} sx={{backgroundColor:theme.palette.primary.main, borderRadius:1.5 }}>

            <IconButton sx={{width:"max-content",color:"#fff"}}  key={el.index}>{el.icon}</IconButton>
          </Box>:
           <IconButton
           onClick={()=>{
            setSelected(el.index);
            Navigate(getPath(el.index));
           }}
           sx={{width:"max-content", color:theme.palette.mode==="light"?"#000":theme.palette.text.primary}}  key={el.index}>{el.icon}</IconButton>
        )  )}
        <Divider sx={{width:"48px"}}/>
        <IconButton>
          <Gear onClick={()=>{
            Navigate("/settings")
          }} />
        </IconButton>
        </Stack>
        </Stack>
        <Stack alignItems="center" spacing={4}>
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple onChange={()=>{
          onToggleMode()
        }} />
        <Avatar src={faker.image.avatar()}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        />
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical:"bottom",
          horizontal:"right"
        }}
        transformOrigin={{
          vertical:"bottom",
          horizontal:"left"
        }}
      >
     <Stack spacing={1} px={1}>
                {Profile_Menu.map((el, idx)=>(
                    <MenuItem 
                    onClick={()=>{
                      handleClick();
                     
                    
                    }}
                    >
                    <Stack onClick={()=>{
                   if(idx === 2){

                    dispatch(LogoutUser())
                  }else{
                    
                    Navigate(getMenu(idx))
                  }
                    }}  sx={{width:100, }} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                     <span>
                     {el.title}
                      </span>
                      {el.icon}
                    </Stack>
                    </MenuItem>
                ))}
     </Stack>
      </Menu>
        </Stack>
        </Stack>

      </Box>
    
  )
}

export default Siderbar
