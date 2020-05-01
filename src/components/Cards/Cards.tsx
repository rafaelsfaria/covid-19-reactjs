import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import { ICardData } from '../../interfaces';
import CardComponent from './CardComponent/CardComponent';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }} : ICardData): any => {
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardComponent
          title={'Infected'}
          end={confirmed}
          lastUpdate={lastUpdate}
          cardStyle={styles.card}
          typeStyle={styles.infected}
          body={'Number of active cases of COVID-19'}
          />
        <CardComponent
          title={'Recovered'}
          end={recovered}
          lastUpdate={lastUpdate}
          cardStyle={styles.card}
          typeStyle={styles.recovered}
          body={'Number of recoveries cases of COVID-19'}
          />
        <CardComponent
          title={'Deaths'}
          end={deaths}
          lastUpdate={lastUpdate}
          cardStyle={styles.card}
          typeStyle={styles.deaths}
          body={'Number of deaths caused by COVID-19'}
          />
      </Grid>
    </div>
  )
}

export default Cards
