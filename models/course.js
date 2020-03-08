const Joi = require('joi');
const mongoose = require('mongoose');

const Course = mongoose.model('Course', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    slug: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
}));

function validateCourses(course) {
    const schema = {
        title: Joi.string().min(5).required(),
        slug: Joi.string().required(),
        description: Joi.string().required()
    };
    return Joi.validate(course, schema);
}

exports.Course = Course;
exports.validate = validateCourses;