/** @format */

import Joi from "joi";

const professionQualificationSchema = Joi.object({
  applicantType: Joi.string().required(),
  familiarTech: Joi.array().required(),
  otherFamiliartech: Joi.string().required(),
  previouslyAppliedRole: Joi.string().required(),
  zeusTestBool: Joi.boolean().required(),
  yearOfExperience: Joi.number().min(1).required().allow(null),
  currentCTC: Joi.number().required().allow(null),
  expectedCTC: Joi.number().required().allow(null),
  expertisedTech: Joi.array().required().allow(null),
  otherExpertisedTech: Joi.string().required().allow(null),
  onNoticePeriod: Joi.boolean().required().allow(null),
  noticePeriodEndDate: Joi.string().required().allow(null),
  noticePeriodDuration: Joi.number().required().allow(null),
});

export default professionQualificationSchema;
