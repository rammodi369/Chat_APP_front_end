import { faker } from "@faker-js/faker";
import { Avatar, Badge, Box, IconButton, Stack, Typography, styled } from "@mui/material";
import { ArrowDownLeft, ArrowUpRight, Phone, VideoCamera } from "phosphor-react";
import React from "react";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
const CallElement = ({ ...el }) => {
  return (
    <Box
      sx={{
        width: "100%",

        borderRadius: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? "#fff"
            : theme.palette.background.default,
      }}
      p={2}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          {el.online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} />
          )}
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{el.name}</Typography>

          <Stack direction={"row"} alignItems={"center"} spacing={0.5}>
          {el.incoming? <ArrowDownLeft  color={el.missed?"red":"green"} /> : <ArrowUpRight  color={el.missed?"red":"green"} />}
         
         <Typography variant="caption">
          Yesterday 21:24
         </Typography>
           </Stack>
          </Stack>
        </Stack>
        <IconButton color='green'>

          <Phone/>
        </IconButton>
      </Stack>
    </Box>
  );
};
const Element = ({...el}) => { 

  return (
    <Box
    sx={{
      width: "100%",

      borderRadius: 1,
      backgroundColor: (theme) =>
        theme.palette.mode === "light"
          ? "#fff"
          : theme.palette.background.default,
    }}
    p={2}
  >
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        {el.online ? (
          <StyledBadge
            overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            variant="dot"
          >
            <Avatar src={faker.image.avatar()} />
          </StyledBadge>
        ) : (
          <Avatar src={faker.image.avatar()} />
        )}
        <Stack spacing={0.3}>
          <Typography variant="subtitle2">{el.name}</Typography>

        <Stack direction={"row"} alignItems={"center"} spacing={0.5}>
        {el.incoming? <ArrowDownLeft  color={el.missed?"red":"green"} /> : <ArrowUpRight  color={el.missed?"red":"green"} />}
       
       <Typography variant="caption">
        Yesterday 21:24
       </Typography>
         </Stack>
        </Stack>
      </Stack>
      <Stack direction={"row"}>

      <IconButton color='green'>

        <Phone color="green"/>
      </IconButton>
      <IconButton>
        <VideoCamera color="green"/>
      </IconButton>
      </Stack>
    </Stack>
  </Box>
  )
};
export { CallElement, Element };
