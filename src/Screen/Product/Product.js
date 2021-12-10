import React from 'react'
import {
    Grid,
    Divider,
    Box,
    Typography,
    Button,
    Container
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import ProductCarousel from '../../Components/ProductCarousel';

import mobile from '.././../Assets/mobile.png'
import mouse from '.././../Assets/mouse.png'
import headphone from '.././../Assets/headphone.png'
import map from '.././../Assets/map.png'

import { useNavigate } from 'react-router';

const styles = makeStyles((theme) => ({
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
    productName: {
        color: '#242424',
        fontWeight: 'bold'
    },
    price: {
        color: '#FF0000',
        fontWeight: "bold",
        margin: '5px 0px'
    },
    heading: {
        color: '#242424',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    fullDivider: {
        margin: '10px 0px'
    },
    smallDivider: {
        height: '3px',
        width: '65px',
        marginTop: '3px'
    },
    mapImg: {
        width: '50%',
        height: 'auto',
        marginTop: '10px'
    },
    addToCart: {
        border: '1px solid #FF0000',
        color: '#FF0000'
    },
    btnCntnr: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap'
    },
    productSlider: {
        marginTop: '30px',
        [theme.breakpoints.down("sm")]: {
            marginBottom: '20px !important'
        },
    }
}));

const data = [
    {
        image: mobile,
        caption: "Mobile Phone"
    },
    {
        image: mouse,
        caption: "Mouse"
    },
    {
        image: headphone,
        caption: "Headphone Phone"
    },

];

const Product = () => {

    const classes = styles();
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    return (
        <Container style={{ marginTop: '30px' }} >
            <Grid container style={{ margin: '20px 0px' }} >
                <Grid item xs={12} >
                    <Button className={classes.backBtn} variant='contained' onClick={goBack} > <ArrowBackIcon fontSize="large" /> </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={6} className={classes.productSlider} >
                    <ProductCarousel data={data} />
                </Grid>
                <Grid item xs={12} sm={6} md={6} style={{ marginTop: '30px' }}  >
                    <Typography className={classes.productName} >Logitech G604 LIGHTSPEED Wireless The quick, brown fox jumps over a lazy dog.</Typography>
                    <Typography className={classes.price} variant="h6" >$ 3999</Typography>
                    <Divider className={classes.fullDivider} />
                    <Typography className={classes.heading} style={{ marginTop: '20px' }} > Description </Typography>
                    <Divider className={classes.smallDivider} />
                    <Typography style={{ margin: '15px 0px' }} >
                        Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit.
                        Nullam et maximus lorem. Suspendisse maximus dolor quis consequat volutpat.
                        Donec vehicula elit eu erat pulvinar, vel congue ex egestas.
                        Praesent egestas purus dolor, a porta arcu pharetra quis.
                        Sed vestibulum semper ligula, id accumsan orci ornare ut. Donec id pharetra nunc, ut sollicitudin mi.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam dapibus nisl at diam scelerisque luctus.
                    </Typography>
                    <Typography className={classes.heading} style={{ marginTop: '20px' }} > Location </Typography>
                    <Divider className={classes.smallDivider} />
                    <Box className={classes.btnCntnr} >
                        <img className={classes.mapImg} src={map} />
                        <Button variant='outlined' className={classes.addToCart} startIcon={<ShoppingCartOutlinedIcon />} >Add to cart</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Product
