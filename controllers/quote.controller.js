import Quote from '../models/Quotes.model.js';

/**
 * @desc    Add new quote
 * @route   POST /api/quotes
 * @access  Private (admin only)
 */
export const addQuote = async (req, res) => {
  const { text, author, category } = req.body;

  if (!text || !category) {
    return res.status(400).json({ message: 'Text and category are required' });
  }

  try {
    const newQuote = await Quote.create({
      text,
      author,
      category,
      createdBy: req.admin._id, // from middleware
    });

    res.status(201).json(newQuote);
  } catch (err) {
    res.status(500).json({ message: 'Server error: ' + err.message });
  }
};

/**
 * @desc    Update a quote by ID
 * @route   PUT /api/quotes/:id
 * @access  Private (admin only)
 */
export const updateQuote = async (req, res) => {
  const { id } = req.params;
  const { text, author, category } = req.body;

  try {
    const quote = await Quote.findById(id);
    if (!quote) return res.status(404).json({ message: 'Quote not found' });

    quote.text = text || quote.text;
    quote.author = author || quote.author;
    quote.category = category || quote.category;
    quote.updatedBy = req.admin._id;

    const updated = await quote.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Server error: ' + err.message });
  }
};

/**
 * @desc    Delete a quote by ID
 * @route   DELETE /api/quotes/:id
 * @access  Private (admin only)
 */
export const deleteQuote = async (req, res) => {
  const { id } = req.params;

  try {
    const quote = await Quote.findById(id);
    if (!quote) {
      return res.status(404).json({ message: 'Quote not found' });
    }

    await Quote.findByIdAndDelete(id);

    res.json({ message: 'Quote deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error: ' + err.message });
  }
};


/**
 * @desc    Get all quotes
 * @route   GET /api/quotes
 * @access  Public
 */
export const getAllQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find().populate('createdBy', 'name').populate('updatedBy', 'name');;
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ message: 'Server error: ' + err.message });
  }
};
