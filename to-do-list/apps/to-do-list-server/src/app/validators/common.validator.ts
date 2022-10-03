import * as Joi from 'joi';

import { constants } from '../constants';

export const commonValidator = Joi.object({
  name: Joi.string().replace(constants.NAME_REGEX, ' ').trim().required()
});
