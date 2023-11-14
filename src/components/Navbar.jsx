import React from 'react'
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    Typography, 
    ListItemButton,
    ListItemText,
} from '@mui/material';
// menu
import DrawerItem from './DrawerItem';
// rotas
import { Link } from 'react-router-dom';
// import css
import styles from './Navbar.module.css';

//rotas
const itemList = [
    {
      text: "Home",
      to: "/" 
    },
    {
      text: "Discourses",
      to: "/"
    },
    {
        text: "Adventure",
        to: "/contact"
    },
    {
        text: "Activity",
        to: "/contact"
    },
    {
        text: "Login",
        to: "/contact"
    }
];


const Navbar = () => {
    
    return (
        <AppBar 
        component="nav" 
        position="sticky"
        className={styles.appbar}
        elevation={0}
        >
         
            <Toolbar className={styles.styledToolbar}><a href="#" ><img className={styles.logo}></img></a></Toolbar>
                <List className={styles.listMenu}>
                    {itemList.map( ( item ) => {
                        const { text } = item;
                        return(
                            <ListItem key={text} >
                                <ListItemButton component={Link} to={item.to} className={styles.listItemButton}>
                                    <ListItemText primary={text} className={styles.listIt} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
            
        </AppBar>
    )
}

export default Navbar;
