import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image from '../../images/mohamed-ibn.png';
import styles from './Portail.module.css'
import cx from 'classnames'
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    maxHeight:550,
    boxShadow: '2px 1px 7px 1px !important',
  },
  media: {
    height: 350,
    width:300,

  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea>
      <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        /> 
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Mohamed IBN HICHAM
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Eleve Ingénieur en génie logiciel full-stack.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}
