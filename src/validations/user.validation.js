const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const { password, objectId } = require('./custom.validation');


let userHouses = Joi.object().keys({
    userHourseId: Joi.objectId().required(),
});

let userRenters = Joi.object().keys({
    userRenterId: Joi.objectId().required(),
});

const createUser = {
    body: Joi.object().keys({
        firstName: Joi.string().required(),
        middleName: Joi.string().required(),
        lastName: Joi.string().required(),
        dateOfBirth: Joi.date().iso().required(),
        gender: Joi.string().valid('Male', 'Female').required(),
        countryCode: Joi.string().required(),
        state: Joi.string().required(),
        district: Joi.string().required(),
        city: Joi.string().required(),
        phone: Joi.number().required(),
        alternatePhone: Joi.number(),
        email: Joi.string().required().email(),
        password: Joi.string().required().custom(password),
        role: Joi.string().required().valid('renter', 'admin'),
        userHouses: Joi.array().items(userHouses),
        userRenters: Joi.array().items(userRenters)
    }),
};

const getUsers = {
    query: Joi.object().keys({
        name: Joi.string(),
        role: Joi.string(),
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    }),
};

module.exports = {
    createUser,
    getUsers
};
