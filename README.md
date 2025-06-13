# Quotes Backend

A simple backend API for managing and serving quotes. Built with Node.js and Express.

## Features

- Add, edit, delete, and retrieve quotes
- RESTful API endpoints
- MongoDB integration for data persistence

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm
- MongoDB

### Installation

```bash
git clone https://github.com/yourusername/quotes-backend.git
cd quotes-backend
npm install
```

### Configuration

Create a `.env` file in the root directory:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/quotesdb
```

### Running the Server

```bash
npm run dev
```

The server will run on `http://localhost:3000`.

## API Endpoints

| Method | Endpoint         | Description           |
|--------|-----------------|-----------------------|
| GET    | /api/quotes     | Get all quotes        |
| GET    | /api/quotes/:id | Get quote by ID       |
| POST   | /api/quotes     | Add a new quote       |
| PUT    | /api/quotes/:id | Update a quote        |
| DELETE | /api/quotes/:id | Delete a quote        |

## License

MIT
