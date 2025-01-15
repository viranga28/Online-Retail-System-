const express = require('express');
const app = express();
const port = 3001;

// Product data (could be loaded from a database or file in a real application)
const availableProducts = [
    { id: 1, name: "Ergonomic Office Chair", price: 199.99, image: "https://via.placeholder.com/200" },
    { id: 2, name: "Wireless Keyboard and Mouse Combo", price: 79.50, image: "https://via.placeholder.com/200" },
    { id: 3, name: "27-inch Monitor", price: 249.00, image: "https://via.placeholder.com/200" },
    { id: 4, name: "Portable SSD Drive", price: 129.99, image: "https://via.placeholder.com/200" },
    { id: 5, name: "Noise-Cancelling Headphones", price: 149.99, image: "https://via.placeholder.com/200" },
];

app.get('/api/products', (req, res) => {
    try {
        res.json(availableProducts);
    } catch (error) {
        console.error("Error sending products:", error);
        res.status(500).json({ error: "Failed to retrieve products." });
    }
});

// Start the server and log a message
const server = app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});

// Basic error handling for server startup
server.on('error', (err) => {
    console.error("Server startup error:", err.message);
});
