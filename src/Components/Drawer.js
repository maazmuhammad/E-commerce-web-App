import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HomeIcon from '@mui/icons-material/Home';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BrushIcon from '@mui/icons-material/Brush';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { useNavigate } from 'react-router';

import logo from '../Assets/logo.jpeg'
import { Avatar, Hidden } from '@mui/material';


const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { window, children, } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ height: 'inherit', position: 'relative', display: 'flex', flexDirection: 'column' }} >
            <Toolbar />
            <Divider />
            <List style={{ marginTop: '10px' }} >
                <ListItem sx={{ display: { xs: 'block', sm: 'none' } }} >
                    <img style={{ width: '80px', height: '50px', margin: '5px' }} src={logo} onClick={ () => navigate('/')} />
                </ListItem>
                <ListItem >
                    <Typography style={{fontWeight:'bold',textTransform:'uppercase'}} variant="h6" >Category</Typography>
                </ListItem>
                {[
                    { text: 'Texhnology', Icon: SettingsEthernetIcon },
                    { text: 'Cars', Icon: DirectionsCarIcon },
                    { text: 'Cosmetic', Icon: BrushIcon },
                    { text: 'Food', Icon: RestaurantIcon },
                    { text: 'Toys', Icon: SmartToyIcon }
                ].map(({ Icon, text }, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            <Icon />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}

            </List>
            <List style={{ marginBottom: '0px', position: 'absolute', bottom: 0, width: '100%' }} >
                <ListItem button onClick={ () =>{
                    localStorage.removeItem('token')
                    navigate('/login')

                }} >
                    <ListItemIcon style={{ color: 'red' }} >
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', backgroundColor: '#F7F7F7' }}>
            <CssBaseline />
            {/* <AppBar
        position="fixed"
        sx={{
            width:'100%'
        //   width: { sm: `calc(100% - ${drawerWidth}px)` },
        //   ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#F7F7F7' }}>
                <Toolbar style={{ display: 'flex' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }, color: '#FE0000' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
                        <img style={{ width: '80px', height: '50px', margin: '5px',cursor:'pointer' }} src={logo} onClick={ () => navigate('/')} />
                    </Box>
                    <Avatar style={{ backgroundColor: 'black', color: 'white', marginLeft: 'auto' }} >MI</Avatar>
                    <IconButton aria-label="shopping Cart" component="span" style={{marginLeft:'10px'}} 
                    onClick={ () => navigate('/cart')}
                     >
                        <ShoppingCartOutlinedIcon fontSize='large' style={{color:'black'}} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {!props?.hideDrawer && <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#F7F7F7' },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#F7F7F7' },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>}
            <Box
                component="main"
                sx={{ flexGrow: 1,  width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                {/* <Toolbar /> */}
                {children}
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
