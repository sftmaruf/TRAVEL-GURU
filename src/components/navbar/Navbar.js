import React, { useContext } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { signedUserContext } from '../../App';
import img from '../../resources/Image/Logo.png';
import './Navbar.css';
import { signOut } from '../loginMechanism/LogInMechanism';

const useStyles = makeStyles((theme) => ({
    btnColor: {
        backgroundColor: 'orange',
        height: '25px',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    grow: {
        flexGrow: 1
    },
    title: {
        display: 'none',
        color: props => props ? 'black' : 'white',
        textDecoration: 'none',
        fontSize: '15px',
        marginLeft: theme.spacing(10),
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            justifyContent: 'center'
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'black',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('1100px')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        color: props => props ? 'black' : 'white',
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },

}));

const Navbar = (props) => {
    const classes = useStyles(props.isWhite);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const [signedUser] = useContext(signedUserContext);
    const history = useHistory();


    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const toogleButton =
        signedUser.name === undefined
            ? <Button onClick={() => history.push("/login")} variant="contained" className={`${classes.btnColor}  title`}>
                Login </Button>
            : <Link onClick={signOut} style={{ fontWeight: 700 }}>
                {signedUser.name || `NO NAME`}
            </Link>


    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <p>News</p>
            </MenuItem>

            <MenuItem>
                <p>Destination</p>
            </MenuItem>

            <MenuItem>
                <p>Blog</p>
            </MenuItem>

            <MenuItem>
                <p>Contact</p>
            </MenuItem>

            <MenuItem>
                {toogleButton}
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none', alignItems: 'center' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                    </IconButton>
                    <div>
                        <Link to='/'> <img style={{ height: '40px', filter: !props.isWhite && 'brightness(0) invert(1)' }} src={img} alt="" /></Link>
                    </div>
                    {
                        !props.isWhite &&
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search your Destination"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    }
                    <div className={classes.grow} />
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Link to='/News' className={classes.title}>
                            News
                        </Link>

                        <Link to='/Destination' className={classes.title}  >
                            Destination
                        </Link>

                        <Link to='/Blog' className={classes.title}  >
                            Blog
                        </Link>

                        <Link to='/Contact' className={classes.title}  >
                            Contact
                        </Link>

                        <div className = {classes.title}>
                            {
                                toogleButton
                            }
                        </div>

                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>

    );
};

export default Navbar;