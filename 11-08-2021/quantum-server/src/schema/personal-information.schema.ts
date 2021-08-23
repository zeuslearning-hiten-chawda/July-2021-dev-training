/** @format */

import Joi from "joi";

const personalInformationSchema = Joi.object({
    firstName: Joi.string().min(3).max(15).required(),
    lastName: Joi.string().min(3).max(15).required(),
    email: Joi.string().email().required().max(40),
    phoneCode: Joi.number().required().min(10).max(999),
    phoneNumber: Joi.number().required().min(1000).max(999999999999),
    resume: Joi.required(),
    portfolioURL: Joi.string().required().max(20),
    referral: Joi.string().required().max(10),
    displayPicture: Joi.required(),
    jobRoles: Joi.array().required(),
    subscription: Joi.boolean().required(),
});

export default personalInformationSchema;