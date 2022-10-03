import * as Joi from 'joi';

import { constants } from '../constants';

export const taskValidator = Joi.object({
  name: Joi.string().replace(constants.NAME_REGEX, ' ').trim().required(),
  listId: Joi.number().min(1).required()
});
