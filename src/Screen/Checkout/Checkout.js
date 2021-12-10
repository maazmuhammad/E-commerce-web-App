import React from 'react'
import { Typography, Box, Divider, OutlinedInput, Radio, FormControlLabel, Button } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

import { useNavigate } from 'react-router'

import ScreenDialog from '../../Components/Dialog';

const styles = makeStyles((theme) => ({
    checkoutHead: {
        color: '#FF0000'
    },
    firstDivider: {
        marginBottom: '20px',
    },
    placeOrderBtn: {
        backgroundColor: '#FF0000',
        color: 'white',
        padding: '20px',
        marginTop:'20px',
        "&:hover": {
            color: 'white',
            backgroundColor: '#FF0000',
        },
    },
}));

const Checkout = ({ openDialog, setOpenDialog, totalAmount }) => {

    const classes = styles();
    const navigate = useNavigate();

    const hideDialogHandler = () => {
        setOpenDialog(false)
        navigate(-1);
    }

    return (
        <ScreenDialog openDialog={openDialog} maxWidth="sm" fullWidth={true} scrollType="body" hideDialogHandler={hideDialogHandler}>
            <Box pt={4} px={4} >
                <Typography className={classes.checkoutHead} variant="h3" >Checkout</Typography>
            </Box>
            <Divider className={classes.firstDivider} />
            <Box pb={4} px={4} >
                <Typography> Muhammad Ibad</Typography>
                <form>
                    <Box mt={2}>
                        <Typography style={{ color: "gray" }} >Phone Number *</Typography>
                        <OutlinedInput required style={{ borderRadius: "10px", height: "45px", marginTop: "5px" }} placeholder="03150000000" fullWidth
                        />
                    </Box>
                    <Box my={2}>
                        <Typography style={{ color: "gray" }} >Address *</Typography>
                        <OutlinedInput required style={{ borderRadius: "10px", height: "45px", marginTop: "5px" }} placeholder="Karachi.." fullWidth
                        />
                    </Box>
                    <FormControlLabel value="cod" checked={true} value={true} control={<Radio />} label="Cash on Delivery" />
                    <Typography style={{ marginTop: '20px', textAlign: 'end' }} > Total Ammount : <span style={{ color: '#FF0000' }} > {totalAmount} </span> </Typography>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }} >
                        <Button type="submit" className={classes.placeOrderBtn} onClick={() => navigate(-1)} >Place Order</Button>
                    </div>
                </form>
            </Box>
        </ScreenDialog>
    )
}

export default Checkout
