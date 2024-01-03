const dotenv = require('dotenv');
const morgan = require('morgan');

process.on('uncaughtException', (err) => {
  console.log('Unhandled Rejection! Shutting down');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');
const app = require('./app');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log('DB connection successful');
  });

const port = process.env.port || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
  console.log(process.env.NODE_ENV);
});

process.on('unhandledRejection', (err) => {
  console.log('Unhandled Rejection! Shutting down');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
