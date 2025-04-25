const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
//const todoRoutes = require('./routes/toDoRoutes');

dotenv.config();
connectDB();

const app = express();

const corsOptions = {
  origin: 'http://localhost:5000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors());
app.use(express.json());

<<<<<<< HEAD
// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/todos', require('./routes/todoRoutes'));

//app.use('/api/todos', todoRoutes);
=======
const authRoutes = require('./routes/authRoutes');
// const todoRoutes = require('./routes/todoRoutes');

// app.use('/api/todos', todoRoutes);
>>>>>>> 5c096ab323daa4d3d708b6983e3c32c2b85fed37
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
