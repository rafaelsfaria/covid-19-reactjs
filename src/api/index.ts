import axios from 'axios';
import { IDailyData, ICountry, IFetchedData, IModifiedData } from '../interfaces';

const url = 'https://covid19.mathdro.id/api';

export async function fetchData (country?: String): Promise<IFetchedData> {
  let changebleUrl = url

  if (country) {
    changebleUrl = `${url}/countries/${country}`
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(changebleUrl);
    return ({ confirmed: confirmed.value, recovered: recovered.value, deaths: deaths.value, lastUpdate });
  } catch (error) {
    return error
  }
}

export async function fetchDailyData(): Promise<Array<IModifiedData>> {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData: IDailyData): IModifiedData => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }));

    return modifiedData;
  } catch (error) {
    return error
  }
}

export async function fetchCountries(): Promise<Array<ICountry>> {
  try {
    const { data: { countries }} = await axios.get(`${url}/countries`);
    return countries.map((country: ICountry) => country.name)
  } catch (error) {
    return error
  }
}