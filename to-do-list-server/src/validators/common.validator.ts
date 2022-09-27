import Joi from 'joi';

export const commonValidator = Joi.object({
    name: Joi.string().trim().required()
});