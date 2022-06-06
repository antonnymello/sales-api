import { celebrate, Joi, Segments } from "celebrate";

export default {
  show: celebrate({
    [Segments.PARAMS]: { id: Joi.string().uuid().required() },
  }),
  create: celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      price: Joi.number().precision(2).required(),
      quantity: Joi.number().required(),
    },
  }),
  update: celebrate({
    [Segments.PARAMS]: { id: Joi.string().uuid().required() },
    [Segments.BODY]: {
      name: Joi.string().required(),
      price: Joi.number().precision(2).required(),
      quantity: Joi.number().required(),
    },
  }),
  delete: celebrate({
    [Segments.PARAMS]: { id: Joi.string().uuid().required() },
  }),
};
