import { Link as RouterLink } from "react-router-dom";
// sections
import { Stack, Typography, Link } from "@mui/material";
import AuthSocial from "../../Sections/auth/AuthSocial";
import VerifyForm from "../../Sections/auth/VerifyForm";

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Please Verify OTP</Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">
            Sent to email (rammodi0509@gmail.com)
          </Typography>
        </Stack>
      </Stack>
      
      <VerifyForm />
    </>
  );
}