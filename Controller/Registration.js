const RegistrationRouter = require('express').Router();
const User=require('../model/Registration')



RegistrationRouter.post('/', async (req, res) => {
    const { username, name, password } = req.body;

    const duser = await User.findOne({ Email: username })
    
    if (!duser)
    {
        const Newuser =await new User({
            Email: username,
            Name: name,
            Password:password
        })
        await Newuser.save();

        res.status(200).json({
            message:"user created sucessfully.."
        })
    }
    else {
        res.status(404).json({
            message:"Email already exists"
        })
    }
})


module.exports=RegistrationRouter