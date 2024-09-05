const jwt = require('jsonwebtoken');
const config = require('../utils/config');

const auth = {
    verifyToken: (request, response, next)=>{
        console.log(request.cookies);
        try {
            // get the token from the request
            // const token = request.get('authorization')
            // const token = request.headers.authorization;
            const token = request.cookies.token;
            console.log(token);

            // if the token is missing, return an error
            if(!token){
                return response.status(401).json({ message: 'Token is missing' })
            }

            // verify the token
            try {
                const decodedToken = jwt.verify(token, config.JWT_SECRET)

                // Add the decoded token to the request object
                request.userId = decodedToken.id;
                next();
            } catch (error) {
                return response.status(401).json({ message: 'Invalid Token' })
            }
            
            
        } catch (error) {
            response.status(500).json({ message: error.message })
        }
        
    }
}

module.exports = auth;