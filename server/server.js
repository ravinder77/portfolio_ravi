import app from './app.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// load env variables
dotenv.config();

// CONNECT DB
connectDB();


const PORT = process.env.PORT || 3000;

// START SERVER
app.listen(PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});




