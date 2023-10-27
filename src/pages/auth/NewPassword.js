import { Link, Stack, Typography } from '@mui/material'
import { CaretLeft } from 'phosphor-react'
import React from 'react'
import {Link as RouterLink} from "react-router-dom"
import NewPasswordForm from '../../Sections/auth/NewPasswordFrom'

const NewPassword = () => {
  return (
  <>
  <Stack spacing={2} sx={{mb:5, position:"relative"}} >
             <Typography   variant='h3' paragraph >
                Reset password
             </Typography>
             <Typography sx={{color:"text.secondary", mg:5}}>
    Please set new Password
  </Typography>
  </Stack>
<NewPasswordForm/>

  <Link  component={RouterLink} to="/auth/login" color={"inherit"} variant='subtitle2' sx={{mt:3, mx:"auto" , alignItems:"center"}} underline='always'>
  <CaretLeft />
  Return to Signin 
  </Link>
  </>
  )
}

export default NewPassword
