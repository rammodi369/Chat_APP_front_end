
import *  as  Yup from "yup";

// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import { Stack, Alert, Button } from "@mui/material";
// import { LoadingButton } from "@mui/lab";
// components
import FormProvider from "../../components/hook-form/FormProvider";
import RHFTextField from "../../components/hook-form/RHFTextField";
import { useDispatch } from "react-redux";
import { ForgotPassword } from "../../redux/Slices/auth";


// ----------------------------------------------------------------------

export default function ResetPasswordForm() {
  const dispatch = useDispatch();

    //   const {isLoading} = useSelector((state) => state.auth);

    const ResetSchema = Yup.object().shape({
        email: Yup.string()
            .required("Email is required")
            .email("Email must be a valid email address"),

    });

    const defaultValues = {
        email: "demo@tawk.com",

    };

    const methods = useForm({
        resolver: yupResolver(ResetSchema),
        defaultValues,
    });

    const {
        reset,
        setError,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = methods;

    const onSubmit = async (data) => {
        try {
            console.log(data);
            
              dispatch(ForgotPassword(data));
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

                <RHFTextField name="email" label="Email address" />



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
                Send Request
            </Button>
            </Stack>

        </FormProvider>
    );
}