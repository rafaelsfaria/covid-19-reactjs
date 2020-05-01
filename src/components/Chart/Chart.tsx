import React, { useEffect, useState } from 'react';
import { fetchDailyData } from '../../api';
import { CircularProgress } from '@material-ui/core';
import { Bar, Line } from 'react-chartjs-2';
import styles from './Chart.module.css';
import { IChartData, IModifiedData } from '../../interfaces';

const Chart = ({ data: { confirmed, deaths, recovered }, country }: IChartData) => {

  const [dailyData, setDailyData] = useState<Array<IModifiedData>>([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const newDailyData = await fetchDailyData()
      setDailyData(newDailyData);
    }
    fetchAPI();
  }, []);

  const lineChart = (
    dailyData.length ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          }]
        }} />
    ) : <CircularProgress />
  );

  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [{
            label: 'People',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)'
            ],
            data: [confirmed, recovered, deaths]
          }]
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}.` }
        }}
      />
    ) : <CircularProgress />
  );

  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  )
}

export default Chart
