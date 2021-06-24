const express = require('express');
const routes = require('./routes');

const PORT = process.env.PORT || 4000;
const app = express();

const cors = require('cors');
app.use(cors())

// middleware - JSON parsing
app.use(express.json());

// middleware - API routes
app.use('/api/v1/entries', routes.entries);

// middleware - error handling
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: err.message });
})

// listen
app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`));