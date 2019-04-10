const router = require('express').Router();
const checkRole = require('../auth/check-role-middleware')
const Users = require('./users-model');
const restricted = require('../auth/restricted-middleware');

router.get('/', restricted,  (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
