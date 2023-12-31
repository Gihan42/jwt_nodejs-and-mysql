const express = require('express');
const port = 3000;
const mysql = require('mysql');
const app = express();
const customer = require('./Routes/CustomerRoutes');
const item = require('./Routes/ItemRoutes');
const users = require('./Routes/UserRoutes');
const otp = require('./Routes/OtpRoutes');


app.use('/customer', customer);
app.use('/item', item);
app.use('/user', users);
app.use('/otp', otp);

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
