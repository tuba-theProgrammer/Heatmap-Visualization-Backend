import axios from 'axios';
import { Location } from '../models/locationModel';
import dotenv from 'dotenv';
dotenv.config();
const apiKey = process.env.OPENWEATHER_API_KEY
const apiUrl = `http://api.weatherapi.com/v1/current.json`;

export const getTemperatureByLocation = async (lat: number, lon: number): Promise<Location> => {
  try {
    const response = await axios.get(`${apiUrl}`, {
      params: {
        key: apiKey,
        q: `${lat},${lon}`
      }
    });

    const data = response.data;
    const location: Location = {
      name: data.location.name,
      lat: data.location.lat,
      lon: data.location.lon,
      temperature: data.current.temp_c
    };

    return location;
  } catch (error: any) {
    console.error('Error fetching temperature:', error.message);
    throw new Error(error.response?.data?.error?.message || 'Failed to fetch temperature data');
  }
};

export const getTemperaturesForMultipleLocations = async (locations: { lat: number, lon: number }[]): Promise<Location[]> => {
  const temperaturePromises = locations.map(loc => getTemperatureByLocation(loc.lat, loc.lon));
  return Promise.all(temperaturePromises);
};
