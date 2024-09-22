const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files from the 'client' directory
app.use(express.static(path.join(__dirname, '../client')));

// Handle socket connection
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for incoming messages
  socket.on('message', (msg) => {
    console.log(`Message received: ${msg}`);
    io.emit('message', msg); // Broadcast the message to all connected users
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
