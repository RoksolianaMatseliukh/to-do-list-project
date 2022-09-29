import * as Joi from 'joi';

export const taskValidator = Joi.object({
  name: Joi.string().trim().required(),
  listId: Joi.number().min(1).required()
});
