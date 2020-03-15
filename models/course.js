const Joi = require('joi');
const mongoose = require('mongoose');

const Course = mongoose.model('Course', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: false
    },
}));

function validateCourse(course) {
    const schema = {
        title: Joi.string().min(5).required(),
        slug: Joi.string().required(),
        description: Joi.optional()
    };
    return Joi.validate(course, schema);
}

exports.Course = Course;
exports.validate = validateCourse;