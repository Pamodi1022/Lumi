// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello, Node.js Server!');
// });

// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PORT } = require('./config/dotenvConfig');
const authRoutes = require('./routes/authRoutes');
const http = require('http');
// const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
// const io = socketIo(server);
app.use(cors());
app.use(bodyParser.json());


app.use('/api/auth', authRoutes);


// io.on('connection', (socket) => {
//   console.log('A user connected');
  
//   // Handle new message in the chat
//   socket.on('newMessage', (message) => {
//     io.emit('message', message);  // Broadcast message to all users
//   });

//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });
// });

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});