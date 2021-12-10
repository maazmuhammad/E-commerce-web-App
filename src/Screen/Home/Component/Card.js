import React from 'react'
import {
    Grid,
    OutlinedInput,
    Box,
    Typography,
    Button,
    CardMedia,
    Paper,
    ListItem
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useNavigate } from 'react-router';

const styles = makeStyles((theme) => ({
    prodctImage: {
        maxWidth: '100%',
        height: '300px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
        // width:'100%',
        // height: 'auto',

    },
    productCard: {
        // backgroundColor: 'yellow',
        height: '450px',
        margin: '10px 10px',
        backgroundColor: 'inherit',
        padding: '8px'
        // display:'flex',
        // flexDirection:'column',
        // [theme.breakpoints.down("md")]: {
        //     height: "250px",
        // },
        // [theme.breakpoints.down("sm")]: {
        //     height: "200px",
        // },
    },
    price: {
        color: '#FF0000',
        fontWeight: "bold"
    },
    postBtn: {
        backgroundColor: "#FF0000",
        color: "white",
        marginLeft: 'auto',
        // border:'none',
        // outline:'none',
        // padding:'12px',
        // borderRadius:"5px",
        "&:hover": {
            backgroundColor: "#FF0000",
            color: "white",
            // cursor:'pointer',
            
        },
    }
}));

const Card = (props) => {

    const classes = styles();

    const navigate = useNavigate();

    return (
        <Paper  m={2} className={classes.productCard} >
            <img className={classes.prodctImage} src={props?.image} alt="Product Image" />
            <Box
                component="div"
                sx={{
                    whiteSpace: 'nowrap',
                    width: { xs: '150px', sm: 'auto' },
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    my: 1,
                }}
            >
                Text Overflow Ellipsis. Text Overflow Ellipsis. Text Overflow Ellipsis
            </Box>
            <Typography variant="h6" className={classes.price} >
                $ {props?.price}
            </Typography>
            <Box style={{ display: "flex" }} >
                <Button onClick={() => navigate(`/product/${props.id}`) } className={classes.postBtn} >
                    View Post
                </Button>
            </Box>
        </Paper>
    )
}

export default Card
