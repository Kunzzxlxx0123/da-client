import { Button, Checkbox, CircularProgress, FormControlLabel, FormLabel, Grid, makeStyles, Paper, Radio, RadioGroup, Slider, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { matchPath } from 'react-router';
import ClippedDrawer from '../../fragment/Header';
import backgroundImg from "../../../image/bg2.jpg";
import Footer from '../../fragment/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { findById } from '../../../actions/products';
import Carousel from "react-material-ui-carousel";
import ShileShow from '../../fragment/Slideshow';
import ProductDetailContent from '../products/productDetails';

const useStyles = makeStyles(theme => ({
    content: {
        margin: '-60px 30px 0px',
        zIndex: 3,
        position: 'relative',
        backgroundColor: '#ffffff',
        boxShadow: '0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)',
        borderRadius: '6px',
        padding: '70px 3%',
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
    group: {
        margin: '5% 0',
        padding: '1%',
        boxShadow: '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)',
    },
    SecondExample: {
        width: '500px',
    },
    Project: {
        width: '500px',
        position: 'relative',
        height: '300px',
        overflow: 'hidden',
        padding: '20px',

    },
    CheckButton: {
        width: '500px',
        marginTop: '40px',
        color: 'white',
        border: '3px solid white',
        textTransform: 'capitalize',
    },
    slideShow: {
        width: '500px',
    }
}));




const ProductDetail = (props) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findById(props.match.params.id));
    }, []);

    const product = useSelector(state => state.products);
    console.log(product);


    return (
        <div>
            <ClippedDrawer />
            <div className={classes.content}>
                {
                    product.length ? (
                        <div>
                            <ProductDetailContent product={product[0]} />
                        </div>
                    ) : <CircularProgress />
                }
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetail;