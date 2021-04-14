import { Paper } from '@material-ui/core';
import React, { useState } from 'react';
import Carousel from "react-material-ui-carousel";
import { useSelector } from 'react-redux';

const ShileShow = () =>{

    const [autoPlay, setAutoPlay] = useState(true);
    const [animation, setAnimation] = useState('fade');
    const [indicators, setIndiCators] = useState(true);
    const [navButtonsAlwaysVisible, setNavButtonsAlwaysVisible] = useState(false);
    const [navButtonsAlwaysInvisible, setNavButtonsAlwaysInvisible] = useState(false);

    const product = useSelector(state => state.products);
    console.log(product);

    function toggleAutoPlay() {
        this.setState({
            autoPlay: !this.state.autoPlay
        })
    }

    function toggleIndicators() {
        this.setState({
            indicators: !this.state.indicators
        })
    }

    function toggleNavButtonsAlwaysVisible() {
        this.setState({
            navButtonsAlwaysVisible: !this.state.navButtonsAlwaysVisible
        })
    }

    function toggleNavButtonsAlwaysInvisible() {
        this.setState({
            navButtonsAlwaysInvisible: !this.state.navButtonsAlwaysInvisible
        })
    }

    function changeAnimation(event) {
        this.setState({
            animation: event.target.value
        })
    }

    function changeTimeout(event, value) {
        this.setState({
            timeout: value
        })
    }

    const carouselItem = (item) => {

    }

    const carousel = (items) => {

        return (
            <div style={{ marginTop: "50px", color: "#494949" }}>
                <h2>Example: Learus Projects (random)</h2>

                <Carousel
                    autoPlay={autoPlay}
                    animation={animation}
                    indicators={indicators}
                    navButtonsAlwaysVisible={navButtonsAlwaysVisible}
                    navButtonsAlwaysInvisible={navButtonsAlwaysInvisible}

                >
                    {
                        items.map((item) => {
                            return (
                                <Paper
                                    
                                    elevation={10}
                                >   
                                    <img src={`https://2.pik.vn/2021b5f3b2fb-6840-46f9-a3d0-076fb79e78fc.jpg`}></img>
                                </Paper>
                            )
                        })
                    }
                </Carousel>

            </div>
        )
    
    }

    return (
        <div>{carousel(product.images)}</div>
    )
}

export default ShileShow;