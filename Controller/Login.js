const LoginRouter = require('express').Router();
const User = require('../model/Registration');

LoginRouter.post('/', async (req, res) => {
    const { username, password } = req.body;

    const findeduser = await User.findOne({ Email:username });

    if (findeduser)
    {
        res.status(200).json({
            message:"User Login Sucessfully..."
        })
    }
    else {
        res.status(204).json({
            message:"User does not exits.."
        })
    }
})


module.exports = LoginRouter;