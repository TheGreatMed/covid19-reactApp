import axios from 'axios';

const API_URL = 'https://covid19.mathdro.id/api';

export const displayData = async (country) => {
    let URL = API_URL;
   
    if (country) {
      URL = `${API_URL}/countries/${country}`;
    }
  
    try {
      const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(URL);
      return { confirmed, recovered, deaths, lastUpdate };
    } catch (er) {
      return console.log(er);
    }
  };
  export const displayDailyData = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/daily`);
     
      return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
      return console.log(error);
    }
  };

export const displayCountries = async () => {
    try {
      const { data: { countries } } = await axios.get(`${API_URL}/countries`);
  
      return countries.map((country) => country.name);
    } catch (error) {
      return console.log(error);
    }
  };