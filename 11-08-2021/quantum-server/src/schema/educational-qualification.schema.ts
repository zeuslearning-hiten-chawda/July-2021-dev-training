/** @format */

import Joi from "joi";

const educationalQualificationSchema = Joi.object({
    percentage: Joi.number().min(35).max(99.99).required(),
    yearOfPassing: Joi.number().min(1000).max(9999).required(),
    qualification: Joi.number().required(),
    stream: Joi.number().required(),
    college: Joi.number().required(),
    otherCollege: Joi.string().required(),
    collegeLocation: Joi.string().required().max(20),
});

export default educationalQualificationSchema;