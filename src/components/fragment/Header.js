import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import TopBar from './TopBar.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Grid } from '@material-ui/core';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    pageHeader: {
        height: '90vh',
        overflow: 'hidden',
        border: 0,
        margin: 0,
        display: 'flex',
        padding: 0,
        position: 'relative',
        maxHeight: '1000px',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    },
    contentHeader: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '15px',
        paddingRight: '15px',
        color: 'white',
    },
}));

export default function ClippedDrawer() {
    const classes = useStyles();
    return (
        <div>
            <CssBaseline />
            <TopBar />
            <div className={classes.pageHeader} style={{ backgroundImage: `url(https://2.pik.vn/2021b5f3b2fb-6840-46f9-a3d0-076fb79e78fc.jpg)` }}>
                <div className={classes.contentHeader}>
                    <Grid container justify="center" alignItems="center">
                        <Grid item>
                            <Typography variant="h1" component="h2" style={{textAlign: 'center'}}>Nova-Computer</Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}