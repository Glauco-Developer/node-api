const express = require('express');
const mongoose = require('mongoose');
const courses = require('./routes/courses');
const users = require('./routes/users');
const app = express();

mongoose.connect('mongodb://localhost/node-backend')
    .then(() => console.log('connected to mongodb'))
    .catch(err => console.log('could not connect to mongodb', err))

app.use(express.json());
app.use('/api/courses', courses);
app.use('/api/users', users);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));