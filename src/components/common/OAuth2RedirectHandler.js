import React, { Component, useEffect } from 'react';
import { ACCESS_TOKEN } from '../../constants/key.js';
import { Redirect } from 'react-router-dom';
import { getCurrentUser, oauth2Singin } from '../../actions/user.js';
import { CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

class OAuth2RedirectHandler1 extends Component {
    getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(this.props.location.search);
        console.log(results);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    render() {
        const token = this.getUrlParameter('token');
        const error = this.getUrlParameter('error');
        const path = this.getUrlParameter('path');
        if (token) {
            return <Redirect to={{
                pathname: path ? path : "/",
                state: {
                    from: this.props.location,
                }
            }} />
        } else {
            console.log(error);
            return <Redirect to={{
                pathname: path ? path : "/",
                state: {
                    from: this.props.location,
                    error: error
                }
            }} />;
        }
    }
}

export default function OAuth2RedirectHandler(props) {

    const dispatch = useDispatch();

    const getUrlParameter = (name) => {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(props.location.search);
        console.log(results);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    const token = getUrlParameter('token');
    const error = getUrlParameter('error');
    const path = getUrlParameter('path');
    console.log(path)
    const LoginSucces = (props) => {

        const dispatch = useDispatch();

        useEffect(() => {
            console.log(props.token);
            console.log(props.path)
            dispatch(oauth2Singin(props.token));
        }, []);

        const user = useSelector(state => state.user);
        return (
            user && user.authenticated ? //props.history.push(`${props.path}`)
            <Redirect to={{
                pathname: props.path ? props.path : '/',
                state : {
                    from: props.path,
                    error: error
                }
            }}/> 
            : <CircularProgress />
        )
    }

    const LoginFailed = (props) => {
        console.log(props);

        return <Redirect to={{
            pathname: props.path ? props.path : "/",
            state: {
                from: props.location,
                error: props.error
            }
        }} />;


    }

    return (
        token ? <LoginSucces token={token} path={path} history={props.history}/> : <LoginFailed />
    )
}
