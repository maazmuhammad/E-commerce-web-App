import React, { useState, useEffect } from 'react'
import {
    Grid,
    Divider,
    Box,
    Typography,
    Button,
    Container,
    IconButton
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useLocation, useNavigate } from 'react-router';

import mobile from '.././../Assets/mobile.png'
import mouse from '.././../Assets/mouse.png'
import headphone from '.././../Assets/headphone.png'

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Checkout from '../Checkout/Checkout';


const styles = makeStyles((theme) => ({
    cartHead: {
        color: '#FF0000'
    },
    chekoutCart: {
        width: '100%',
        height: '260px',
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        boxShadow: "0 0.5rem 1rem rgb(0 0 0 / 15%)",
        // margin:'auto',
        [theme.breakpoints.up("md")]: {
            position: '-webkit-sticky',
            position: 'sticky',
            top: '100px'
        },
        paddingTop: '10%',
        paddingBottom: '10px'
    },
    finalPriceCntnr: {
        [theme.breakpoints.down("sm")]: {
            margin: 'auto'
        },
    },
    firstDivider: {
        marginBottom: '20px',
    },
    secondDivider: {
        margin: '20px 0px'
    },
    itemImage: {
        width: '100%',
        height: '150px',
        borderRadius: '10px',
        [theme.breakpoints.down("sm")]: {
            height: '100px',
        },
    },
    itemPrice: {
        color: '#FE0000',
        fontWeight: 'bold',
        // margin: '20px 0px'
    },
    iconBtn: {
        border: '1px solid #FE0000'
    },
    itemDetails: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    alignItem: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    chekoutBtn: {
        backgroundColor: '#FF0000',
        color: 'white',
        padding: '20px',
        "&:hover": {
            color: 'white',
            backgroundColor: '#FF0000',
        },
    },
    backBtn: {
        backgroundColor: 'white',
        color: '#FF0000',
        width: '50px',
        height: '60px',
        borderRadius: '50%',
        "&:hover": {
            backgroundColor: 'white',
            color: '#FF0000',
        }
    },
}));

let arr = [
    {
        image: mobile,
        caption: "Logitech G604 LIGHTSPEED",
        price: 3999,
        quantity: 1
    },
    {
        image: mouse,
        caption: "Logitech G604 LIGHTSPEED Wireless The quick, brown fox jumps over a lazy dog.",
        price: 3999,
        quantity: 1
    },
    {
        image: headphone,
        caption: "Logitech G604 LIGHTSPEED Wireless The quick, brown fox jumps over a lazy dog.",
        price: 3999,
        quantity: 1
    },
    {
        image: mouse,
        caption: "Logitech G604 LIGHTSPEED Wireless The quick, brown fox jumps over a lazy dog.",
        price: 3999,
        quantity: 1
    },

];




const Item = (props) => {
    const classes = styles();

    return (
        <Grid container style={{ marginBottom: '20px' }} >
            <Grid item xs={12} >
                <Divider className={classes.firstDivider} />
            </Grid>
            <Grid item xs={4} sm={3} md={3} >
                <img className={classes.itemImage} src={props?.image} alt="item picture" />
            </Grid>
            <Grid item xs={8} md={9} className={classes.itemDetails} style={{ padding: '5px 10px' }} >
                <Typography>{props?.caption}</Typography>
                <Typography variant="h6" className={classes.itemPrice} >$ {props?.price * props?.quantity}</Typography>
                <div style={{ display: 'flex', alignItems: 'center' }} >
                    <IconButton className={classes.iconBtn} size='small'
                        onClick={() => props?.removeItem()
                        } > <RemoveIcon style={{ color: '#FE0000' }} /> </IconButton>
                    <Typography style={{ margin: '0px 10px' }} >{props?.quantity}</Typography>
                    <IconButton className={classes.iconBtn} size='small'
                        onClick={() => props?.addItem()
                        } > <AddIcon style={{ color: '#FE0000' }} /> </IconButton>
                </div>
            </Grid>
            <Grid item xs={12} >
                <Divider className={classes.secondDivider} />
            </Grid>
        </Grid>
    )
}


const Cart = () => {

    const classes = styles();

    let navigate = useNavigate();
    const { pathname } = useLocation()

    const [openDialog, setOpenDialog] = useState(false)

    useEffect(() => {
        if (pathname == "/checkout") {
            setOpenDialog(true);
        }
    }, [pathname])

    const goBack = () => {
        navigate(-1)
    }

    const [data, setData] = useState([...arr])

    const addItem = (ind) => {
        arr[ind].quantity += 1
        setData([...arr])
    }

    const removeItem = (ind) => {
        if (arr[ind].quantity > 1) {
            arr[ind].quantity -= 1
            setData([...arr])
        }
    }

    const totalAmount = (arr) => {
        let total = 0;
        arr.forEach(element => {
            total += element.price * element.quantity
        });

        return total
    }


    return (
        <>
            <Container style={{ marginTop: '20px' }}>
                <Grid container spacing={4} >
                    <Grid item xs={12} >
                        <Button className={classes.backBtn} variant='contained' onClick={goBack} > <ArrowBackIcon fontSize="large" /> </Button>
                    </Grid>
                    <Grid item xs={12} style={{ marginBottom: '30px' }} >
                        <Typography className={classes.cartHead} variant="h3" >Cart</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} >
                        {
                            data.map((val, i) => {
                                return (<Item
                                    ind={i}
                                    price={val.price}
                                    image={val.image}
                                    caption={val.caption}
                                    quantity={val.quantity}
                                    addItem={() => addItem(i)}
                                    removeItem={() => removeItem(i)}
                                />)
                            })
                        }
                    </Grid>
                    <Grid item xs={12} sm={8} md={4} className={classes.finalPriceCntnr} >
                        <Box className={classes.chekoutCart} >
                            <div style={{ height: '80%', padding: '0px 10%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }} >
                                <div className={classes.alignItem} >
                                    <Typography>Total Amount</Typography>
                                    <Typography>{totalAmount(data)}</Typography>
                                </div>
                                <div className={classes.alignItem} >
                                    <Typography>Delivery charges</Typography>
                                    <Typography>{10}</Typography>
                                </div>
                                <div className={classes.alignItem} >
                                    <Typography>Total Amount</Typography>
                                    <Typography>{totalAmount(data) + 10}</Typography>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }} >
                                <Button className={classes.chekoutBtn} onClick={() => navigate('/checkout')} >Check Out</Button>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Checkout openDialog={openDialog} totalAmount={totalAmount(data) + 10} setOpenDialog={(val) => setOpenDialog(val)} />
        </>
    )
}

export default Cart
