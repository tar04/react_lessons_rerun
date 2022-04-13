import Joi from "joi";

const carValidator = Joi.object({
    model: Joi.string().regex(/^[a-zA-ZА-яёЁыЫіІєЄїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'You can use only letters, 1-20 symbols'
    }),
    price:Joi.number().min(0).max(1000000).required().messages({
        'number.min':'Price cannot be lower than 0',
        'number.max':'Price must be lower than 1000000',
        'number.required':'Price required'
    }),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min':'Year must be higher than 1990',
        'number.max':'Year must be lower or equal to current year',
        'number.required':'Year required'
    })
});

export {carValidator}

