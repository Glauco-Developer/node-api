const config = require('config');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const courses = require('./routes/courses');
const users = require('./routes/users');
const auth = require('./routes/auth');
const app = express();

if(!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivateKey is not defined');
    process.exit(1);
}
mongoose.connect('mongodb://localhost/node-backend')
    .then(() => console.log('connected to mongodb'))
    .catch(err => console.log('could not connect to mongodb', err))

app.use(express.json());
app.use(cors());
app.use('/api/courses', courses);
app.use('/api/users', users);
app.use('/api/auth', auth);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));