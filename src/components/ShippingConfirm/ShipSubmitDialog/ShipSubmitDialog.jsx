import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

    // MUI
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Slide
} from "@material-ui/core";

    // Transition on mount
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ShipSubmitDialog({ openSubmit, setOpenSubmit }) {
        //hooks
    const dispatch = useDispatch();
    const history = useHistory();

        //click handlers
    const handleSubmit = () => {
            //close dialog
        setOpenSubmit(false);

            //TODO: dispatch for an order (If we want one to show on admin page)

            //redirect to dashboard after order submitted
        history.push("/dashboard");
    };

    const handleBack = () => {
            //close dialog
        setOpenSubmit(false);
    };

    return (
    <>
        <Dialog
        open={openSubmit}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleBack}
        >
            <DialogTitle id="alert-dialog-slide-title">
                {"Confirm Order?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Placeholder for passed summary of order.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button 
                    onClick={handleBack} 
                    color="inherit"
                >
                    Back
                </Button>
                <Button 
                    onClick={handleSubmit} 
                    color="primary" 
                    variant="contained"
                >
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    </>
    );
}