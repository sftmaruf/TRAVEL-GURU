import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '30px',
    boxSizing: 'border-box',
    background: 'transparent',
    borderRadius: '25px',
    '&:hover': {
      cursor: 'pointer',
      borderRadius: '25px',
      boxShadow: '0 0 4px 4px orange'
    },
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
      height: 'auto',
    }
  },
  overlay: {
    position: 'absolute',
    // zIndex: 1,
    padding: 0,
    top: '320px',
    bottom: '-50px',
    left: '20px',
    fontSize: '36px',
    fontWeight: '700',
    color: 'white',
    fontFamily: "'Bebas Neue','cursive'",
    backgroundColor: 'transparent',
  }
}));


const PlacesCard = (props) => {

  const { name, id, img } = props.place;
  const classes = useStyles();

  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Card className={classes.root}>
        <CardActionArea onClick = {() => props.handleDetail(id)}>
          <CardMedia onMouseOver = {props.handleOnMouseOver} className={classes.media}
            component="img"
            style = {{maxWidth: '270px', maxHeight: '416px'}}
            alt={name}
            image={img}
            title={name}
          />
          <span className={classes.overlay}>
            {name}
           </span>
        </CardActionArea>
      </Card>
     </div>

  );
};

export default PlacesCard;