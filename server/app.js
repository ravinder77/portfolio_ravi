import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';



// CONFIG
dotenv.config();

// APP 
const app = express();



// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ROUTES


app.use('/api/v1/user', userRoutes);




export default app;
