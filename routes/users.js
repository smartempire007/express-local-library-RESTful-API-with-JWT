// const express = require('express');
// const router = express.Router();
// const user_controller = require('../controllers/userController');


// /** 
//  * @swagger
//  * components: 
//  *     schemas:
//  *         User:
//  *             type: object
//  *             required:
//  *                 - first_name
//  *                 - last_name
//  *                 - email
//  *                 - password
//  *                 - date
//  *             properties:
//  *                 id:
//  *                     type: integer
//  *                     description: The auto-generated id of the user.
//  *                 first_name:
//  *                     type: string
//  *                     description: The name of the user.
//  *                 last_name:
//  *                     type: string
//  *                     description: The last name of the user.
//  *                 email:
//  *                     type: string
//  *                     description: The email of the user.
//  *                 password:
//  *                     type: string
//  *                     description: The password of the user for future login.
//  *                 date:
//  *                     type: date
//  *                     description: The password of the user for future login.
//  *
//  */


// /**
//  * @swagger
//  * tags:
//  *     name: Users
//  *     description: The list of all Users in the user registration.
//  */


// /**
//  * @swagger
//  * /user_registration:
//  *     post:
//  *         summary: Creating a new user
//  *         description: post request to create a new author in the Library
//  *         tags: [Users]
//  *         requestBody:
//  *             required: true
//  *             content:
//  *                 application/json:
//  *                     schema:
//  *                         $ref: '#/components/schemas/User'
//  *                 application/xml:
//  *                         schema:
//  *                             $ref: '#/components/schemas/User'
//  *         responses:
//  *             200:
//  *                 description: successful operation
//  *                 content:
//  *                     application/json:
//  *                         schema:
//  *                             $ref: '#/components/schemas/User'
//  *                     application/xml:
//  *                         schema:
//  *                             $ref: '#/components/schemas/User'
//  *             404: 
//  *                 description: User Not Found        
//  * 
//  */

 

// /* Post users registration to register a user . */
// router.post('/user_registration', user_controller.usersRegistration);


// /**
//  * @swagger
//  * /user_login:
//  *     post:
//  *         summary: login to an existing users account
//  *         description: post request to login an existing user
//  *         tags: [Users]
//  *         requestBody:
//  *             required: true
//  *             content:
//  *                 application/json:
//  *                     schema:
//  *                         $ref: '#/components/schemas/User'
//  *                 application/xml:
//  *                         schema:
//  *                             $ref: '#/components/schemas/User'
//  *         responses:
//  *             200:
//  *                 description: successful operation
//  *                 content:
//  *                     application/xml:
//  *                         schema:
//  *                             $ref: '#/components/schemas/User'
//  *                     application/json:
//  *                         schema:
//  *                             $ref: '#/components/schemas/User'
//  *             400: 
//  *                 description: Invalid User Email and Password        
//  * 
//  */


// // POST users login to login a user that was registered
// router.post('/user_login', user_controller.usersLogin);


// module.exports = router;
