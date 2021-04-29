import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../actions/products';
import ContentAdmin from '../components/DasBoard/Content';
import HeaderAdmin from '../components/DasBoard/Header';


const useStlyes = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
}))

const DashBoard = (props) => {

    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(getProducts());
    })
    const classes = useStlyes();
    
    return (
        <div className={classes.root}>
            <HeaderAdmin />
            <ContentAdmin />

        {/* <!-- Custom scripts for all pages--> */}
        </div>
    )

}

export default DashBoard;