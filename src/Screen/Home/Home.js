import React from 'react'
import {
    Grid,
    OutlinedInput,
    Box,
    Typography,
    Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Card from './Component/Card';

import Rectangle from "../../Assets/Rectangle.png"

import mobile from '.././../Assets/mobile.png'
import mouse from '.././../Assets/mouse.png'
import headphone from '.././../Assets/headphone.png'
import cover from '.././../Assets/cover.png'

const styles = makeStyles((theme) => ({
    banner: {
        width: '100% !important',
        height: 'auto !important',
        [theme.breakpoints.down("sm")]: {
            height: '200px !important'
        },
    }
}));

const Home = () => {

    const classes = styles();

    let prdctArr = [
        {
            id: 1,
            image: mobile,
            content: 'Logitech G604 LIGHTSPEED Wireless The quick, brown fox jumps over a lazy dog.',
            price: 3999,
        },
        {
            id: 2,
            image: cover,
            content: 'Logitech G604 LIGHTSPEED Wireless The quick, brown fox jumps over a lazy dog.',
            price: 3999,
        },
        {
            id: 3,
            image: 'http://localhost:3000/static/media/Rectangle.b65d3291.png',
            content: 'Logitech G604 LIGHTSPEED Wireless The quick, brown fox jumps over a lazy dog.',
            price: 3999,
        },
        {
            id: 4,
            image: mouse,
            content: 'Logitech G604 LIGHTSPEED Wireless The quick, brown fox jumps over a lazy dog.',
            price: 3999,
        },
    ]

    return (
        < >
            <Grid container >
                <Grid item xs={12} >
                    <img className={classes.banner} src={Rectangle} />
                </Grid>
                {
                    prdctArr.map((val, i) => {
                        return (
                            <Grid item xs={12} sm={6} md={4}   >
                                <Card image={val.image} price={val.price} id={val.id} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}

export default Home
