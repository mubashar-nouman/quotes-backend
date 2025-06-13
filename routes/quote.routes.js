import express from 'express';
import {
  addQuote,
  updateQuote,
  deleteQuote,
  getAllQuotes,
} from '../controllers/quote.controller.js';
import { authenticateRequest } from '../middlewares/auth.middleware.js';

const router = express.Router();

// Public route to fetch all quotes
router.get('/all', getAllQuotes);

// Admin routes
router.post('/add', authenticateRequest, addQuote);
router.put('/edit/:id', authenticateRequest, updateQuote);
router.delete('/delete/:id', authenticateRequest, deleteQuote);

export default router;
