import React, { useEffect } from 'react';
import { AppBar, Container, Grid, Grow, makeStyles, Toolbar, Typography } from '@material-ui/core';
import ClippedDrawer from '../../fragment/Header.js';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../../actions/products.js';
import Products from '../products/Products.js';
import backgroundImg from '../../../image/bg2.jpg';
import Footer from '../../fragment/Footer.js';

const useStyles = makeStyles((theme) => ({
    content: {
        margin: '-60px 30px 0px',
        zIndex: 3,
        position: 'relative',
        backgroundColor: '#ffffff',
        boxShadow: '0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)',
        borderRadius: '6px',
        padding: '70px 3%',
    },
    itemContainer: {
        flexWrap: 'unset',
        margin: 'unset',
        marginTop: '5px'
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
    navBarGroup: {
        marginTop: '-4%',
        marginLeft: '20px',
        borderRadius: '3px',
        width:'fit-content',
        background:'#F44336',
        padding: '5px',
    },
    group: {
        margin: '5% 0',
        padding: '2%',
        boxShadow: '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)',
    },


}));

function Home() {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    

    return (
        <div>
            <ClippedDrawer />
           
            <div className={classes.content}>
                    <div className={classes.group}>
                        <AppBar position={'static'} className={classes.navBarGroup}>
                            <Typography variant="h6">Nhóm sản phẩm số 1</Typography>
                        </AppBar>
                        <Grow in>
                            <Grid className={classes.itemContainer}>
                                <Products />
                            </Grid>
                        </Grow>
                    </div>

                    <div className={classes.group}>
                        <AppBar position={'static'} className={classes.navBarGroup}>
                            <Typography variant="h6">Nhóm sản phẩm số 2</Typography>
                        </AppBar>
                        <Grow in>
                            <Grid className={classes.itemContainer}>
                                <Products />
                            </Grid>
                        </Grow>
                    </div>
            </div>

            <Footer />
        </div>

    );
}

export default Home;