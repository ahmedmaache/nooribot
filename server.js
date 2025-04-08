const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the public directory
app.use(express.static('public'));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
function getAvailablePort(startPort = 80) {
    return new Promise((resolve, reject) => {
        const server = require('net').createServer();
        server.on('error', () => resolve(getAvailablePort(startPort + 1)));
        server.listen(startPort, () => {
            server.close(() => resolve(startPort));
        });
    });
}

getAvailablePort(process.env.PORT || 3000).then(port => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}).catch(err => {
    console.error('Failed to start server:', err);
});