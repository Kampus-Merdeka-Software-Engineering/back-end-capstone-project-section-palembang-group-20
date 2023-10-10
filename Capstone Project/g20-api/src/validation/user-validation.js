import Joi from 'joi';

const registerValidation = Joi.object({
    nama_lengkap: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    no_hp: Joi.string().required(),
});

const loginValidation = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
});

export {
    registerValidation,
    loginValidation
}