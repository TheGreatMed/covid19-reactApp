import React from 'react'
import CountUp from 'react-countup';
import cx from 'classnames';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './Cards.module.css'
import Box from '@material-ui/core/Box';
import { Container } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import { Spinner } from 'reactstrap';
import CardMedia from '@material-ui/core/CardMedia';
import vert from '../../images/vert.png';
import warn from '../../images/warng.png';
import death from '../../images/death.png';
import Moment from 'react-moment';
import 'moment-timezone';

const useStyles = makeStyles({
  
  media: {
    height: 30,
    width:30,
    weight: 20,
  },
});

const Cards =({ data: { confirmed, recovered, deaths, lastUpdate } }) =>{
  



   const classes = useStyles();
   const dateToFormat = new Date(lastUpdate);
     
    if (!confirmed) {
        
        return (
          <div className={styles.container}  >
            <h1>Loading....</h1>
        <Spinner style={{ width: '3rem', height: '3rem' }} />
          </div>
          );
      }
    return(
       
        <Container className="themed-container" fluid={true}>
          <Grid container spacing={3} justify="center" >
        <Grid item component={Card}  xs={12} md={3} className={cx(styles.card, styles.confirmed,styles.shadows)}>
          <CardContent>
            <Typography style={{color:'#f77427'}} variant="h4" gutterBottom>
              Confirmed  
            </Typography> 
            <Typography  style={{color:'#f77427',fontStyle:'bold'}} variant="h4" component="h2">
            <CardMedia className={classes.media}
             image={warn}  />
             <Box fontWeight="fontWeightBold" m={1}>
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
              </Box>
            </Typography>
            <Typography color="textSecondary">
            Last Update :  
            <Moment  format="YYYY-MM-DD HH:mm:ss">
            {dateToFormat} 
            </Moment>
            </Typography>
          </CardContent>
        </Grid>
        <Grid item  component={Card} xs={12} md={3} className={cx(styles.card, styles.success,styles.shadows)}>
          <CardContent>
            <Typography style={{ color: '#05b584' }} variant="h4" gutterBottom>
              Recovered 
            </Typography>
            <Typography variant="h4" component="h2">
            <CardMedia className={classes.media}
             image={vert}  />
             <Box fontWeight="fontWeightBold" m={1}>
              <CountUp start={0} end={recovered.value} style={{ color: '#05b584' }}duration={2.75} separator="," />
              </Box>
            </Typography>
            <Typography color="textSecondary">
            Last Update :  
            <Moment  format="YYYY-MM-DD HH:mm:ss">
            {dateToFormat} 
            </Moment>
            </Typography>
            
          </CardContent>
        </Grid>
        <Grid item  component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths,styles.shadows)}>
          <CardContent >
            <Typography color="error" variant="h4" gutterBottom>
              Deaths 
            </Typography>
            <Typography variant="h4" color="error"component="h2">
            <CardMedia className={classes.media}
             image={death}  />
             <Box fontWeight="fontWeightBold" m={1}>
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
              </Box>
            </Typography>
            <Typography color="textSecondary">
             Last Update :  
            <Moment  format="YYYY-MM-DD HH:mm:ss">
            {dateToFormat} 
            </Moment>
            </Typography>
          </CardContent>
        </Grid>
        </Grid>
        </Container>
    )
}

export default Cards;