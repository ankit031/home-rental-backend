const express = require('express');
const validate = require('../../middlewares/validate');

const userController = require('../../controllers/user.controller');
const userValidation = require('../../validations/user.validation');

const router = express.Router();

router
    .route('/')
    .post(validate(userValidation.createUser), userController.createUser)
    // .get(userController.getUser)
    .get(validate(userValidation.getUsers), userController.getUsers)


// router
//     .route('/')
//     .post(auth('manageUsers'), validate(userValidation.createUser), userController.createUser)
//     .get(auth('getUsers'), validate(userValidation.getUsers), userController.getUsers);

module.exports = router;
