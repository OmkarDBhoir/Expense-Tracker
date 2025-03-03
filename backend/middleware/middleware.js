const jwt = require('jsonwebtoken');

const protectedRoute = async (req, resp, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return resp.status(401).json({ messge: "No toke provided. Authorizaton denied." });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decode;
        next();
    } catch (error) {
        console.error('JWT verification failed: ', error);
        resp.status(401).json({messge: "Invalid token. Authorizaton denied."});
    }
}

module.exports = protectedRoute;