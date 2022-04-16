const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');

const createUser = catchAsync(async (req, res) => {
    const user = await userService.createUser(req.body);
    res.status(httpStatus.CREATED).send(user);
});

const getUser = catchAsync(async (req, res) => {
    // const user = await userService.createUser(req.body);
    // res.status(httpStatus.CREATED).send(user);
    res.send({"name":"shreya"});

});

module.exports = {
    createUser,
    getUser
};
