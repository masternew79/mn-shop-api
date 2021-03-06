const jwt = require('jsonwebtoken');

module.exports = {
    user: async (req, res, next) => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(403).json({message: 'No token provided.'});
            }
            const decoded = jwt.verify(token, process.env.JWT_KEY);
            req.userData = decoded;
            next()
        } catch (error) {
            res.status(401).json({ message: "Auth failed"});
        }
    },
    admin: async (req, res, next) => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(403).send('No token provided.');
            }
            const decoded = jwt.verify(token, process.env.JWT_KEY);
            req.userData = decoded;
            if (!decoded.isAdmin) return res.status(401).json({ message: "Can not access"});
            next()
        } catch (error) {
            res.status(401).json({ message: "Auth failed"});
        }
    }
}