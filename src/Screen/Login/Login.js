import React,{useEffect,useState} from 'react'
import {
    Grid,
    OutlinedInput,
    Box,
    Typography,
    Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import SignupBg from "../../Assets/SignupBg.png"
import logo from "../../Assets/logo.jpg"

import { Link,useNavigate,Navigate } from "react-router-dom"

const styles = makeStyles((theme) => ({
    redBanner: {
        width: "100%",
        height: "auto",
        maxHeight: "105px"
    },
    signupBg: {
        backgroundColor: "#F7F7F7",
        minHeight: "100vh"
    },
    logo: {
        width: "auto",
        maxHeight: "60px"
    },
    alignCenter: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    inputField: {
        backgroundColor: "#FFFFFF",
        border: "none !important",
        outline: "none !important",
        borderRadius: "5px",
        height: "35px",
        width: "350px",
        // margin:"5px 10px",
        // "&:hover": {
        //     "& $notchedOutline": {
        //         border: "none",
        //     },
        // },
        [theme.breakpoints.down("sm")]: {
            width: "90%",
            marginLeft: "5%",
            marginRight: "5%",
        },
    },
    widthSetter: {
        width: "auto",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    },
    inputLabel: {
        color: "black",
        textTransform: "uppercase",
        fontWeight: "bold",
        alignSelf: "flex-start",
        [theme.breakpoints.down("sm")]: {
            marginLeft: "5%",
            marginRight: "5%",
        },
    },
    signupBtn: {
        width: "100%",
        backgroundColor: "#FF0000",
        color: "white",
        [theme.breakpoints.down("sm")]: {
            width: "90%",
            marginLeft: "5%",
            marginRight: "5%",
        },
        "&:hover": {
            backgroundColor: "#FF0000",
            color: "white",
        },
    }
}));


const Login = () => {

    const classes = styles();
    let navigate = useNavigate();

    const [loading, setloading] = useState(true)

    const checkLogin = () =>{
        localStorage.setItem('token','1234')
        navigate('/')
    }

    // useEffect(() => {
    //     if(localStorage.getItem('token'))
    //     {
    //         setloading(false)
    //         navigate(-1)
    //     }
    // }, [])




    if(localStorage.getItem('token'))
    {
       return <Navigate to={-1} />
    }
    return (
        <>
            <Grid container className={classes.signupBg} >
                <Grid item xs={12} >
                    <img className={classes.redBanner} src={SignupBg} />
                </Grid>
                <Grid xs={12}   >
                    <Box className={classes.alignCenter} sx={{ paddingY: 2 }} >
                        <img className={classes.logo} src={logo} />
                        <Typography variant="h4" style={{ color: "#FF0000", marginTop: "20px", textTransform: "uppercase", fontWeight: "bold" }} >
                            Dollar $tore !
                        </Typography>
                        <Typography variant="h6" style={{ fontWeight: "bold", letterSpacing: "2px", marginTop: "5px" }} >
                            Login to Dollar$tore
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} className={classes.alignCenter} >
                    <form className={classes.widthSetter} >
                        <Box my={3} className={classes.widthSetter}  >
                            <Typography className={classes.inputLabel} >Email Address </Typography>
                            <OutlinedInput type="email"  fullWidth className={classes.inputField} placeholder="mibad0338@gmail.com" />
                        </Box>
                        <Box my={3} className={classes.widthSetter}  >
                            <Typography className={classes.inputLabel} >Password </Typography>
                            <OutlinedInput type="password"  fullWidth className={classes.inputField} placeholder="*************" />
                        </Box>
                        <Box my={3} className={classes.widthSetter} >
                            <Button  className={classes.signupBtn} onClick={checkLogin} >LOGIN</Button>
                        </Box>
                    </form>
                    <Typography style={{ fontWeight: "bold" }} >Dont Have an Account</Typography>
                    <Typography style={{ fontWeight: "bold", color: "#FF0000", margin: "10px 0px" }} >
                        <Link style={{ color: "#FF0000", textDecoration: "none" }} to="/signup" >
                            SIGNUP
                        </Link>
                    </Typography>
                </Grid>

            </Grid>
        </>
    )
}

export default Login
