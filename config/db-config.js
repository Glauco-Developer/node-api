const express = require('express');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/node-backend')
    .then(() => console.log('connected to mongodb'))
    .catch(err => console.log('could not connect to mongodb', err))

module.exports = mongoose;