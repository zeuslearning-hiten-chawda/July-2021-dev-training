/** @format */

import Joi from "joi";

const jobApplicationSchema = Joi.object({
  personalInformationId: Joi.string().required(),
  walkInJobId: Joi.number().required(),
  date: Joi.string().required(),
  timeSlotId: Joi.number(),
  jobRoles: Joi.array().required(),
  updatedResume: Joi.required(),
});

export default jobApplicationSchema;
