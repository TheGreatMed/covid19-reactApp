import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { displayDailyData } from '../../api';
import cx from 'classnames';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './Charts.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await displayDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Confirmed', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['#f77427', '#05b584', 'rgb(255, 0, 0)'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: country? `Current state in ${country}`:'Current state in world' },
        }}
      />
    ) : null
  );

  const lineChart = (
    dailyData[0] ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map((data) => data.confirmed),
            label: 'Confirmed',
            backgroundColor:'#f77427',
            fill: true,
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            backgroundColor: 'rgb(255, 0, 0)',
            fill: true,
          },
          ],
        }}
      />
    ) : null
  );

  return (
    <div className={styles.container}>
        
       <Grid container spacing={6} justify="center">
       
        <Grid item  xs={12} md={5} className={cx(styles.card, styles.confirmed,styles.shadows)}>
          {lineChart}
        </Grid>
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        <Grid item   xs={12} md={5} className={cx(styles.card, styles.success,styles.shadows)}>
          {barChart}
        </Grid>
        
        </Grid>

    </div>
  );
};

export default Chart;