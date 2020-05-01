import React from 'react';
import { Card, Typography, Grid } from '@material-ui/core';
import cx from 'classnames';
import CountUp from 'react-countup';
import { ICardComponent } from '../../../interfaces'

const CardComponent = ({ end, lastUpdate, cardStyle, typeStyle, title, body }: ICardComponent) => {
  return (
    <Grid item component={Card} xs={12} md={3} className={cx(cardStyle, typeStyle)}>
      <Typography color="textSecondary" gutterBottom>{title}</Typography>
      <Typography variant="h5">
        <CountUp start={0} end={end} duration={2.5} separator="," />
      </Typography>
      <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
      <Typography variant="body2">{body}</Typography>
    </Grid>
  )
}

export default CardComponent
