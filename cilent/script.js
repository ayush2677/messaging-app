const socket = io(); // Connect to the server

// Send message when "Send" button is clicked
document.getElementById('sendBtn').addEventListener('click', () => {
  const message = document.getElementById('input').value;
  socket.emit('message', message); // Send message to the server
  document.getElementById('input').value = ''; // Clear input field
});

// Display received messages
socket.on('message', (message) => {
  const messages = document.getElementById('messages');
  const newMessage = document.createElement('div');
  newMessage.textContent = message;
  messages.appendChild(newMessage);
});
