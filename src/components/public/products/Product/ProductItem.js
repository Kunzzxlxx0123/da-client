import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, CardHeader, Avatar, IconButton, Tooltip } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import itemImage from '../../../../image/item.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';
import { Info } from '@material-ui/icons';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

  const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.images[0]}
      />
      <CardContent>
        <Typography color="textPrimary" component="p">
          {`${product.name}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="Like" aria-label="Like">
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </Tooltip>
        <p style={{color: 'red', left: 0}}>{`${product.likeCount}`}</p> 
        <Tooltip title="Share" aria-label="Share">
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </Tooltip>
        <Link to={`/product/${product.id}`} className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}>
          <Tooltip title='Detail' aria-label="Detail">
            <IconButton>
              <Info />
            </IconButton>
          </Tooltip>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductItem;