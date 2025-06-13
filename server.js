import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.routes.js';
import quoteRoutes from './routes/quote.routes.js';
import connectDB from './config/db.js';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  }));
  
app.use(express.json());
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/quotes', quoteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
