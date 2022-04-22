const userModel = require('../models/user_model')
const leaderboardsModel = require('../models/leadboards_model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const register = async (req, res) => {
    try {
        const { first_name, last_name, email, username, password, favteam } = req.body;
        if (!(email && first_name && last_name && username && password)) {
            res.status(400).json({
                error: 'All input required'
            });
        }

        const oldUser = await userModel.findOne({ email });
        if (oldUser) {
            return res.status(409).send({
                error: 'User already exist.'
            })
        }

        encryptedPassword = await bcrypt.hash(password, 15);

        const user = await userModel.create({
            first_name,
            last_name,
            email: email.toLowerCase(),
            password: encryptedPassword,
            username,
            favteam
        })
        const fullName = first_name + " " + last_name
        const leaderboards = await leaderboardsModel.create({
            name: fullName
        })
        leaderboards._id = user._id;
        const token = jwt.sign({
            user_id: user._id,
            email
        }, process.env.JWT_TOKEN_KEY);
        user.token = token;
        res.status(201).json({
            user_res: user,
            leaderboards_res: leaderboards
        });
    } catch (error) {
        console.log(error);
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            res.status(400).json({
                error: "All input is required"
            })
        }
        const user = await User.findOne({ email })

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                {
                    user_id: user._id,
                    email
                },
                process.env.JWT_TOKEN_KEY
            )
            user.token = token
            return res.status(200).json(user)
        }
        res.status(400).json({
            error: "Invalid Credentials"
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    register
}