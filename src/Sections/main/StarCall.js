import { Dialog, DialogContent, DialogTitle, InputBase, Slide, Stack, alpha, styled } from '@mui/material'
import { MagnifyingGlass} from 'phosphor-react'
import React from 'react'
import { Element } from '../../components/CallElement'
import { MembersList } from '../../data'
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />
})
const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.background.default, 1),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    display: "flex"

}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
    height: "100%",
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
const StartCall = ({open, handleClose}) => {
  return (
    <Dialog fullWidth maxWidth="xs" open={open} TransitionComponent={Transition} keepMounted  onClose={handleClose}>
    <DialogTitle  sx={{mb:3 }} >
        Start Call
    </DialogTitle>
    <DialogContent>
    <Stack sx={{ width: "100%", }} >
                            <Search >
                                <SearchIconWrapper>
                                    <MagnifyingGlass color='#709ce6' height={"40px"} />
                                </SearchIconWrapper>
                                <StyledInputBase placeholder='search' inputProps={{ "aria-label": "search" }} />
                            </Search>
                        </Stack>

                        {MembersList.map((el)=>(
                            <Element {...el}/>

                        ))}
    </DialogContent>
</Dialog>
  )
}

export default StartCall
