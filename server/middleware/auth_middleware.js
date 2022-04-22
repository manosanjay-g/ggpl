const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.status(401).json({ error: "Token is invalid" })
    }
    jwt.verify(token, process.env.JWT_TOKEN_KEY, (err, user) => {
        if (err) {
            console.log(err);
            return res.status(403).json({
                error: err
            })
        }

        req.user = user
        next();
    })

}

module.exports = {
    authenticateToken
}