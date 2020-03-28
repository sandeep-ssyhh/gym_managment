const registerRoute = require('../route/route.register');

const express=require('express');

var router = express.Router();

router.use('/register',registerRoute)

module.exports = router;