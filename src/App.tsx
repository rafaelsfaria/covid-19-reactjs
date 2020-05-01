import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import covid from './images/covid.png';

class App extends React.Component {

  defaultData = {
    confirmed: 0,
    recovered: 0,
    deaths: 0,
    lastUpdate: new Date().toDateString()
  };

  state = {
    data: this.defaultData,
    country: ''
  }

  async componentDidMount() {
    try {
      const fetchedData = await fetchData();
      this.setState({ data: fetchedData })
    } catch (error) {
      this.setState({ data: this.defaultData })
    }
  }

  async handleCountryChange (country: String) {
    try {      
      const fetchedData = await fetchData(country);
      this.setState({ data: fetchedData, country })
    } catch (error) {
      this.setState({ data: this.defaultData, country })
    }
  } 

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={covid} alt='COVID 19' />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange.bind(this)} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;