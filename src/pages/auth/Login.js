import { Link, Stack, Typography } from '@mui/material'
import React from 'react'
import {Link as RouterLink} from "react-router-dom"
import AuthSocial from '../../Sections/auth/AuthSocial'
import LoginForm from '../../Sections/auth/LoginForm'

const Login = () => {
  return (
    <>
    <Stack spacing={2} sx={{mb:5, position:"relative"}}>
            <Typography variant='h4' >
                Login to FarmEx
            </Typography>
            <Stack direction={"row"} spacing={0.5}>
              <Typography variant='body2'> New user?</Typography>
              <Link to="/auth/register" component={RouterLink} variant="subtitle2">
              Create an account
              </Link>
            </Stack>
            {/* login form  */}
<LoginForm/>
                  <AuthSocial/>
    </Stack>
    </>
  )
}

export default Login
