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
    }
}));

function validateCourses(course) {
    const schema = {
        title: Joi.string().required(),
        slug: Joi.string().required()
    };
    return Joi.validate(course, schema);
}

exports.Course = Course;
exports.validate = validateCourses;