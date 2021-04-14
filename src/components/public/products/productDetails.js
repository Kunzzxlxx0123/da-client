import clsx from 'clsx';
import { Backdrop, Box, Button, Card, CardMedia, CircularProgress, Divider, Fade, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, List, ListItem, ListItemIcon, ListItemText, makeStyles, Modal, OutlinedInput, Paper, TextField, Typography } from '@material-ui/core';
import zIndex from '@material-ui/core/styles/zIndex';
import { Send, TextFields, Visibility, VisibilityOff } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import StarIcon from '@material-ui/icons/Star';


const useStyles = makeStyles(theme => ({

    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundBlendMode: 'darken',
    },
    infomation: {
        padding: '2%',
        '& li': {
            margin: '2%',
            lineHeight: 2,
        }
    },
    detailInfomation: {

    },
    rowAdd: {
        height: '30px',
        textAlign: 'center',
        '& div': {
            height: '100%',
        },
    },

    review: {
        padding: '2%',
    },
    details: {
        padding: '2% 10%',

    },

    warranty: {
        border: '1px solid',
        padding: '1%',
        textAlign: 'center',
        margin: '5%',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const HoverRating = () => {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    return (
        <Box
            style={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                size="large"
            />
            {value !== null && (
                <Box style={{ marginLeft: '16px' }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
        </Box>
    );
}

const ProductDetailContent = ({ product }) => {

    const classes = useStyles();

    const [numberBuy, setNumberBuy] = useState(0);

    const changeNumberBuy = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setNumberBuy(e.target.value);
    }

    const increaseNumber = (e) => {
        e.preventDefault();
        setNumberBuy(numberBuy + 1);
    }
    const decreaseNumber = (e) => {
        e.preventDefault();
        if (numberBuy > 0) {
            setNumberBuy(numberBuy - 1);
        }
    }

    const [modalOpen, setModalOpen] = React.useState(false);

    const handleOpen = () => {
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
    };
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return (
        <div>
            <div className={classes.review}>
                <Grid container >
                    <Grid item xs={5}>

                        <Carousel
                            autoPlay={false}
                            animation={'fade'}
                            autoPlay={false}
                            indicators={true}
                            navButtonsAlwaysVisible={false}
                            navButtonsAlwaysInvisible={false}
                            sytle={{ padding: '1%' }}
                        >
                            {
                                product.images.map(url => {
                                    return (
                                        <Card>
                                            <CardMedia className={classes.media} style={{ maxWidth: '500px', minHeight: '100%' }}
                                                image={`${url}`}
                                                title={product.name}
                                            />

                                        </Card>
                                    )
                                })
                            }
                        </Carousel>
                    </Grid>
                    <Grid item xs={7} style={{ padding: '2%' }}>
                        <Typography variant="h4" color="secondary"> {`${product.name}`} </Typography>
                        <Divider />
                        <Typography variant="h6">{product.status}</Typography>
                        <Grid container>
                            <Grid item xs={6} md={6}>
                                <List dense={'dense'} className={classes.infomation}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Send />
                                        </ListItemIcon>
                                        <ListItemText>
                                            {`${product.display}`}
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Send />
                                        </ListItemIcon>
                                        <ListItemText>
                                            {`${product.cpu}`}
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Send />
                                        </ListItemIcon>
                                        <ListItemText>
                                            {`${product.ram}`}
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Send />
                                        </ListItemIcon>
                                        <ListItemText>
                                            {`${product.description}`}
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <div>
                                            <Button variant="contained" color="secondary" onClick={handleOpen} component="span">
                                                Cấu hình chi tiết
                                            </Button>
                                            <Modal
                                                aria-labelledby="transition-modal-title"
                                                aria-describedby="transition-modal-description"
                                                className={classes.modal}
                                                open={modalOpen}
                                                onClose={handleClose}
                                                closeAfterTransition
                                                BackdropComponent={Backdrop}
                                                BackdropProps={{
                                                    timeout: 500,
                                                }}
                                            >
                                                <Fade in={modalOpen}>
                                                    <div className={classes.paper}>
                                                        <h2 id="transition-modal-title">Thông tin chi tiết</h2>
                                                        <p id="transition-modal-description">react-transition-group animates me.</p>
                                                    </div>
                                                </Fade>
                                            </Modal>
                                        </div>
                                    </ListItem>
                                </List>

                            </Grid>
                            <Grid item xs={6} sytle={{ padding: '2%' }}>
                                <div className={classes.warranty}>
                                    Chính sách bảo hành
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.rowAdd}>
                            <Grid item xs={5}>
                                <Grid container >
                                    <Grid item xs={3}>
                                        <Button variant="contained" onClick={increaseNumber} color="primary" style={{ height: '100%' }} component="span">+</Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField id="numberBuy" variant="outlined" onChange={changeNumberBuy} value={numberBuy} type="number" />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button variant="contained" onClick={decreaseNumber} color="primary" style={{ height: '100%' }} component="span">-</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={7}>

                                <Button variant="contained" color="secondary" style={{ float: 'left', height: '100%' }}>Thêm vào giở hàng</Button>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>

            <div>
                <div className={classes.details} style={{ margin: '5%' }}>
                    <div style={{ marginBottom: '5%' }}>
                        <Typography variant="h4" color="textSecondary">Đánh giá chi tiết</Typography>
                    </div>
                    <Divider />
                    <div style={{ margin: '5% 0' }}>
                        <Typography variant="h4" color="textSecondary">Đánh giá của khách hàng</Typography>
                        <HoverRating />
                    </div>
                    <Divider />

                    <div style={{ marginTop: '5%' }}>
                        <Typography variant="h4" color="textSecondary">{`Bình Luận`}</Typography>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" fullWidth>
                            <InputLabel htmlFor="yourComment">Your comment</InputLabel>
                            <OutlinedInput
                                id="yourComment"
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                            <Send />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>
                    </div>
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default ProductDetailContent;