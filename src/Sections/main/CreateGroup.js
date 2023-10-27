import { Button, Dialog, DialogContent, DialogTitle, Slide, Stack } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions';
import * as Yup from "yup"
import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider from '../../components/hook-form/FormProvider';
import RHFTextField from '../../components/hook-form/RHFTextField';
import RHFAutocomplete from '../../components/hook-form/RHFAutocomplete';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />
})

const MEMBERS=["Name 1", "Name 2", "Name 3"]
const CreateGroupForm = ({ handleClose}) => {
    const NewGroupSchema = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        members: Yup.array().min(2, "Must have atlease 2 members"),
    })
    const defaultValues = {
        title: "",
        members: [],
    }
    const methods = useForm({
        resolver: yupResolver(NewGroupSchema),
        defaultValues
    })
    const {
        reset,
        watch,

        setError,
        handleSubmit,
        formState: { errors, isSubmitSuccessful, isSubmitting, isValid }
    } = methods;

    const onSubmit = async (data) => {
        try {

        }
        catch (error) {
            console.log("error", error)
        }
    }
    return (
        <FormProvider   methods={methods} onSubmit={handleSubmit(onSubmit)} >
        <Stack spacing={3} >
            <RHFTextField   name="title" label="Title"  />
            <RHFAutocomplete name="members" label="Members" multiple  freeSolo options={MEMBERS.map((option)=>option)}  ChipProps={{size:"medium"}} / >
            <Stack spacing={2} direction={"row"} alignItems={"center"} justifyContent={"end"} >
                        <Button type='submit'  variant='container' onClick={handleClose} > 
                       Cancel
                        </Button>
                        <Button type='submit'  variant='container' > 
                            Create
                        </Button>
            </Stack>
       </Stack>
        </FormProvider>
    )

}


const CreateGroup = ({ open, handleClose }) => {
    return (
        <Dialog fullWidth maxWidth="xs" open={open} TransitionComponent={Transition} keepMounted >
            <DialogTitle  sx={{mb:3 }} >
                Create a Group
            </DialogTitle>
            <DialogContent>
           <CreateGroupForm  handleClose={handleClose} />
            </DialogContent>
        </Dialog>
    )
}

export default CreateGroup
