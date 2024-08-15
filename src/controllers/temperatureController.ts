import { Request, Response } from 'express';
import { getTemperaturesForMultipleLocations } from '../services/temperatureService';

export const getTemperatures = async (req: Request, res: Response): Promise<void> => {
  // List of major cities or key geographical locations across the world
  const locations = [
    { lat: 37.7749, lon: -122.4194 }, // San Francisco, USA
    { lat: 48.8566, lon: 2.3522 },    // Paris, France
    { lat: 35.6895, lon: 139.6917 },  // Tokyo, Japan
    { lat: -33.8688, lon: 151.2093 }, // Sydney, Australia
    { lat: 55.7558, lon: 37.6173 },   // Moscow, Russia
    { lat: -34.6037, lon: -58.3816 }, // Buenos Aires, Argentina
    { lat: 28.6139, lon: 77.209 },    // Delhi, India
    { lat: 19.4326, lon: -99.1332 },  // Mexico City, Mexico
    { lat: 51.5074, lon: -0.1278 },   // London, UK
    { lat: -1.2921, lon: 36.8219 },   // Nairobi, Kenya
    { lat: 1.3521, lon: 103.8198 },   // Singapore
    { lat: 39.9042, lon: 116.4074 },  // Beijing, China
    { lat: -23.5505, lon: -46.6333 }, // São Paulo, Brazil
    { lat: 40.7128, lon: -74.006 },   // New York, USA
    { lat: -22.9068, lon: -43.1729 }, // Rio de Janeiro, Brazil
    { lat: 41.9028, lon: 12.4964 },   // Rome, Italy
    { lat: -26.2041, lon: 28.0473 },  // Johannesburg, South Africa
    { lat: 13.7563, lon: 100.5018 },  // Bangkok, Thailand
    { lat: -12.0464, lon: -77.0428 }, // Lima, Peru
    { lat: 40.4168, lon: -3.7038 },   // Madrid, Spain
    { lat: 25.276987, lon: 55.296249 }, // Dubai, UAE
    { lat: 24.7136, lon: 46.6753 },   // Riyadh, Saudi Arabia
    { lat: 29.3759, lon: 47.9774 },   // Kuwait City, Kuwait
    { lat: 30.0444, lon: 31.2357 },   // Cairo, Egypt
    { lat: 25.0343, lon: 121.5645 },  // Taipei, Taiwan
    { lat: 24.8607, lon: 67.0011 },   // Karachi, Pakistan
    { lat: 35.6762, lon: 51.3861 },   // Tehran, Iran
    { lat: 6.5244, lon: 3.3792 },     // Lagos, Nigeria
    { lat: 14.6928, lon: -17.4467 },  // Dakar, Senegal
    { lat: 31.5204, lon: 74.3587 },   // Lahore, Pakistan
    { lat: 33.6844, lon: 73.0479 },   // Islamabad, Pakistan
    { lat: 23.8103, lon: 90.4125 },   // Dhaka, Bangladesh
    { lat: 32.4279, lon: 53.6880 },   // Yazd, Iran
    { lat: 15.5007, lon: 32.5599 },   // Khartoum, Sudan
  ];

  try {
    const temperatures = await getTemperaturesForMultipleLocations(locations);
    res.json(temperatures);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
