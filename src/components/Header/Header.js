import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import CustomDrawer from './CustomDrawer';
import { useDispatch, useSelector } from 'react-redux';
import { getTreeCategories } from '../../actions/categories';
import bg2 from '../../image/bg2.jpg';
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

export default function Header() {
    const classes = useStyles();

    let windowScrollTop;
    if (window.innerWidth >= 768) {
        windowScrollTop = window.pageYOffset / 3;
    } else {
        windowScrollTop = 0;
    }
    const [transform, setTransform] = useState("translate3d(0," + windowScrollTop + "px,0)");
    const dispatch = useDispatch();
    React.useEffect(() => {
        if (window.innerWidth >= 768) {
            window.addEventListener("scroll", resetTransform);
        }
        return function cleanup() {
            if (window.innerWidth >= 768) {
                window.removeEventListener("scroll", resetTransform);
            }
        };
    }, []);
    const resetTransform = () => {
        var windowScrollTop = window.pageYOffset / 3;
        setTransform("translate3d(0," + windowScrollTop + "px,0)");
    };
    return (
        <div>
            <CssBaseline />
            <CustomDrawer />
            <div className={classes.pageHeader} style={{
                backgroundImage: `url(${bg2})`,
                transform: transform
            }}>
                <div className={classes.contentHeader}>
                    <Grid container justify="center" alignItems="center">
                        <Grid item>
                            <Typography variant="h1" component="h2" style={{ textAlign: 'center' }}>Nova-Computer</Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}