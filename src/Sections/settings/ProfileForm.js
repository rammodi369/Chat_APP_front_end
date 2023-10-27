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
import { useCallback } from "react";

// ----------------------------------------------------------------------

export default function ProfileForm() {


//   const {isLoading} = useSelector((state) => state.auth);

  const LoginSchema = Yup.object().shape({
   name:Yup.string().required("Name is required"),
   about:Yup.string().required("Something about you"),
   avatarUrl:Yup.string().required("Avatar is required").nullable(true),
  });

  const defaultValues = {
   name:"",
   about:"",
  }; 

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
setValue,
    setError,
    handleSubmit,
    formState: { errors , isSubmitting, isSubmitSuccessful },
  } = methods;

  const values=watch();
  const handleDrop=useCallback((acceptedfiles)=>{
    const file=acceptedfiles[0];
    const newFile=Object.assign(file,{
        preview:URL.createObjectURL(file),
    })
if(file){
    setValue("avatarUrl", newFile,{shouldValidate:true})
}

  },[setValue])

  const onSubmit = async (data) => {
    try {
      console.log(data);

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
  <Stack  spacing={3} >
  <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}

        <RHFTextField name="name" label="Name" helperText={"This name is visible to your contacts"} />
         <RHFTextField name="about" multiline rows={4} maxRows={5} label="About" />
        
      </Stack>
<Stack  direction={"row"} justifyContent={"end"}  >
    <Button  color="primary"  size="large" type="submit" variant="outlined" >
        Save
    </Button>
</Stack>
  </Stack>
      

 
    </FormProvider>
  );
}