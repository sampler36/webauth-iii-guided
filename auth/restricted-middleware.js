const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const secrete = require('../config/secrets')

const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
  const token= req.headers.authorization;

  if(token){
    jwt.verify(token, secrete.jwtSecret, (error, decodedToken
    ) => {
    if(error){
      res.status(400).json({ you: 'cant touh this'})
    } else {
      req.decodedJWT = decodedToken;
      console.log('decoded ting ', req.decodedJWT);
      next();
    }
    })
  } else {
    res.status(400).json({message: 'No buzz light year details'})
  }
  // if (username && password) {
  //   Users.findBy({ username })
  //     .first()
  //     .then(user => {
  //       if (user && bcrypt.compareSync(password, user.password)) {
  //         next();
  //       } else {
  //         res.status(401).json({ message: 'Invalid Credentials' });
  //       }
  //     })
  //     .catch(error => {
  //       res.status(500).json({ message: 'Ran into an unexpected error' });
  //     });
  // } else {
  //   res.status(400).json({ message: 'No credentials provided' });
  // }
};
