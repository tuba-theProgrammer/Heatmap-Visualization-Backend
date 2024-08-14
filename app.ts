import express, { Application } from 'express';
import cors from 'cors';
import temperatureRoutes from './src/routes/temperatureRoutes'

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/temperatures', temperatureRoutes);

export default app;
