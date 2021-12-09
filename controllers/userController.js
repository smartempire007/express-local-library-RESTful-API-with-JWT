const User = require('../models/user');
const async = require('async');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {registerValidation, loginValidation} = require('../validation')
const token_verify = require('../authMiddleware/verifyToken');





exports.usersRegistration =  async function(req, res) {
    
    //Lets validate the data before we use
    const {error} = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // checking if the user is already in the database
    const emailExist =  await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send('Email already exists');

    // Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword =  await bcrypt.hash(req.body.password, salt)

    // Create a new user
    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: hashedPassword
    });
    try{
        const saveUser = await user.save();
        res.send({user: user._id}); 
    }catch (err) {
        res.status(400).send(err);
    }
};


// LOGIN

exports.usersLogin = async function(req, res) {

    //Lets validate the data before we use
    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // checking if the email exist
    const user =  await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email does not exists');

    // checking if password is correct
    const validPassword =  await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid password');

    // Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.SECRET_TOKEN, {expiresIn: "1h"});
    res.header('authorization', token).send(token);

};


