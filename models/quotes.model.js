import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const quoteSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuidv4
    },
    text: {
      type: String,
      required: true,
      trim: true,
      index: 'text' // Enables full-text search on quote text
    },
    author: {
      type: String,
      trim: true,
      default: 'Unknown'
    },
    category: {
      type: String,
      required: true,
      trim: true,
      index: true // category filters are common in UI
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
      index: true
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin'
    }
  },
  { timestamps: true }
);

export default mongoose.model('Quote', quoteSchema);
