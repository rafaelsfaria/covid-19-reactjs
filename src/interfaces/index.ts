export interface IDailyData {
  confirmed: {
    total: number
  },
  deaths: {
    total: number
  },
  reportDate: string
}

export interface ICountry {
  name: String
}

export interface IFetchedData {
  confirmed: number,
  recovered: number,
  deaths: number,
  lastUpdate: string
}

export interface IModifiedData {
  confirmed: number,
  deaths: number,
  date: string
}

export interface ICardData {
  data: {
    confirmed: number,
    recovered: number,
    deaths: number,
    lastUpdate: string
  }
}

export interface IChartData {
  data: {
    confirmed: number,
    recovered: number,
    deaths: number,
    lastUpdate: string
  },
  country: string
}

export interface ICardComponent {
  end: number,
  lastUpdate: string,
  cardStyle: string,
  typeStyle: string,
  title: string,
  body: string
}