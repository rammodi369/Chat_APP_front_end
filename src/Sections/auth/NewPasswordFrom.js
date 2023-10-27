import {  useState } from "react";
import *  as  Yup from "yup";
import { Link as RouterLink } from "react-router-dom";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import { Link, Stack, Alert, IconButton, InputAdornment, Button } from "@mui/material";
// import { LoadingButton } from "@mui/lab";
// components
import FormProvider from "../../components/hook-form/FormProvider";
import  RHFTextField  from "../../components/hook-form/RHFTextField";
import { Eye, EyeSlash } from "phosphor-react";

import { useDispatch, useSelector } from "react-redux";

// ----------------------------------------------------------------------

export default function NewPasswordForm() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

//   const {isLoading} = useSelector((state) => state.auth);

  const NewSchema = Yup.object().shape({
    
    newpassword: Yup.string().min(6,"password must be at lease 8 characters").required("Password is required"),
    confirmpassword: Yup.string().required("Password is required").oneOf([Yup.ref("newpassword"),null],"Password must match"),

  });

  const defaultValues = {
   newpassword:"",
   confirmpassword:"",
  }; 

  const methods = useForm({
    resolver: yupResolver(NewSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors , isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try {
      console.log(data);
      // submit data to backend
    //   dispatch(LoginUser(data));
    } catch (error) {
      console.error(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}

     

        <RHFTextField
          name="newpassword"
          label=" New Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <RHFTextField
          name="confirmpassword"
          label=" Confirm Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

      <Button
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        // loading={isLoading}
        sx={{
          bgcolor: "text.primary",
          color: (theme) =>
            theme.palette.mode === "light" ? "common.white" : "grey.800",
          "&:hover": {
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
          },
        }}
      >
       Submit
      </Button>
      </Stack>

    
    </FormProvider>
  );
}