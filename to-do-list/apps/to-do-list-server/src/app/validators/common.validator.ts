import * as Joi from 'joi';

export const commonValidator = Joi.object({
  name: Joi.string().replace(/\s+/g, ' ').trim().required()
});
