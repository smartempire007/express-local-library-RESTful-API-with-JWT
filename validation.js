const Joi = require('joi');

// Register validation
const registerValidation = (data) => {
    const schema = {
        first_name: Joi.string()
                    .min(5)
                    .required(),

        last_name: Joi.string()
                    .min(5)
                    .required(),

        email: Joi.string()
                .min(6)
                .required()
                .email(),

        password: Joi.string()
                    .min(6)
                    .required(),
                   
    };
    return (data, schema);
};


// Register validation
const loginValidation = (data) => {
    const schema = {

        email: Joi.string()
                .min(6)
                .required()
                .email(),

        password: Joi.string()
                    .min(6)
                    .required(),
                   
    };
    return (data, schema);
};




module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;